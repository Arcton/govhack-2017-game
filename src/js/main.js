import Tock from 'tocktimer';
import Region from './model/region';
import Upgrade from './model/upgrade';
import Population from './model/population';
import Progress from './model/progress-resource';
import { ResourcePool } from './model/resource-pool';
import { tickRegions } from './utils';
import { saveState, loadState, resetState } from './loader';
import { TICKS_PER_SECOND } from './consts';

window.resetState = resetState;

require('../index.html');

const ticksPerSecond = TICKS_PER_SECOND;
const millisPerTick = 1000 / ticksPerSecond;

const startingPopulation = 50000;

const regions = {
  northland: new Region({
    name: 'Northland',
    cost: 169900,
  }),
  auckland: new Region({
    name: 'Auckland',
    cost: 1593100,
  }),
  waikato: new Region({
    name: 'Waikato',
    cost: 444400,
    upgrades: [
      new Upgrade({
        id: 'foo',
        name: 'Foo',
        level: 1,
      }, {
        deltaCallback(elapsedTicks, level) {
          return {
            mining: elapsedTicks * level,
            technology: elapsedTicks * level * 2,
          };
        },
      }),
      new Upgrade({
        id: 'bar',
        name: 'Bar',
        level: 1,
      }, {
        deltaCallback(elapsedTicks, level) {
          return {
            agriculture: elapsedTicks * level,
            forestry: elapsedTicks * level * 3,
          };
        },
      }),
    ],
  }),
  bayOfPlenty: new Region({
    name: 'Bay of Plenty',
    cost: 290500,
  }),
  gisbourne: new Region({
    name: 'Gisbourne',
    cost: 47600,
    upgrades: [
      new Upgrade({
        id: 'test',
        name: 'Test',
        level: 10,
      }, {
        deltaCallback(elapsedTicks, level) {
          return {
            mining: elapsedTicks * level * 4,
            technology: elapsedTicks * level * 2,
          };
        },
      }),
    ],
  }),
  hawkesBay: new Region({
    name: 'Hawkes Bay',
    cost: 160900,
  }),
  taranaki: new Region({
    name: 'Taranaki',
    cost: 116300,
    upgrades: [
      new Upgrade({
        id: 'rekt',
        level: 1,
      }, {
        deltaCallback(elapsedTicks, level) {
          return {
            energy: elapsedTicks * level * 1.5,
          };
        },
      }),
    ],
  }),
  manawatu_wanganui: new Region({
    name: 'Manawatu / Wanganui',
    cost: 235800,
  }),
  wellington: new Region({
    name: 'Wellington',
    cost: 501100,
  }),
  tasman_nelson: new Region({
    name: 'Tasman / Nelson',
    cost: 100200,
  }),
  marlborough: new Region({
    name: 'Marlborough',
    cost: 45500,
  }),
  westCoast: new Region({
    name: 'West Coast',
    cost: 32600,
  }),
  canterbury: new Region({
    name: 'Canterbury',
    cost: 594100,
  }),
  otago: new Region({
    name: 'Otago',
    cost: 217200,
  }),
  southland: new Region({
    name: 'Southland',
    cost: 97700,
  }),
};

const { resourcePool, population, happiness } = loadState((state) => {
  let savedResources;
  let savedHappiness;
  let savedPopulation;
  let elapsedMs = 0;
  if (state != null) {
    savedResources = state.resourcePool;
    savedHappiness = state.happiness;
    savedPopulation = state.population;
    // load regions/upgrade state
    Object.entries(state.regions).forEach(([name, savedRegion]) => {
      if (regions[name] == null) {
        return;
      }
      const region = regions[name];
      if (savedRegion.isActive != null) {
        region.isActive = savedRegion.isActive;
      }
      if (savedRegion.upgrades != null) {
        savedRegion.upgrades.forEach((savedUpgrade) => {
          if (savedUpgrade.id == null) {
            return;
          }
          const upgrade = region.upgrades.get(savedUpgrade.id);
          if (upgrade == null) {
            return;
          }
          upgrade.level = savedUpgrade.level;
          Object.entries(savedUpgrade.costs).forEach(([resource, amount]) => {
            upgrade.costs[resource] = amount;
          });
        });
      }
    });
    if (state.timestamp != null) {
      elapsedMs = new Date().getTime() - state.timestamp;
    }
  }
  // have to create resource pool before we can run the offline ticks
  const loadedResourcePool = new ResourcePool(savedResources);
  if (elapsedMs > 0) {
    const elapsedTicks = elapsedMs / millisPerTick;
    tickRegions(elapsedTicks, regions, loadedResourcePool);
  }
  return {
    resourcePool: loadedResourcePool,
    population: new Population(Object.assign({}, { total: startingPopulation }, savedPopulation)),
    happiness: new Progress(Object.assign({}, { value: 75 }, savedHappiness, { name: 'Happiness', total: 100 })),
  };
});

const resourcesCount = resourcePool.length;

function save() {
  saveState({
    resourcePool,
    population,
    happiness,
    regions,
    timestamp: new Date().getTime(),
  });
}

window.addEventListener('beforeunload', save);

let prevTick = 0;
const timer = new Tock({
  interval: millisPerTick,
  callback: (tick) => {
    const totalElapsedTime = timer.lap();
    const elapsedTicks = (totalElapsedTime - prevTick) / millisPerTick;
    prevTick = totalElapsedTime;

    const resourcesDelta = tickRegions(elapsedTicks, regions, resourcePool);
    // TODO: population consumes resources
    let newHappiness = 50;
    const happinessPerResource = (happiness.total / 2) / (resourcesCount + 1);
    let totalResourceDelta = 0;
    // some happiness for resource production/consumption
    Object.values(resourcesDelta).forEach((resourceDelta) => {
      const clampedDelta = Math.min(Math.max(resourceDelta, -happinessPerResource), happinessPerResource);
      newHappiness += clampedDelta;
      totalResourceDelta += resourceDelta;
    });
    // some happiness for overall production/consumption
    const clampedDelta = Math.min(Math.max(totalResourceDelta, -happinessPerResource), happinessPerResource);
    newHappiness += clampedDelta;
    const happinessDelta = (newHappiness - happiness.value) / 50;
    happiness.value += happinessDelta;

    // slowly move towards new value
    const populationDelta = Math.round((happiness.value - (happiness.total / 2))) || 0;
    population.total += populationDelta;

    if (population.total < 0) {
      // gameover!
    }

    if ((tick.timeout % 60) === 0) {
      save();
    }
  },
});

timer.start();

export default {
  resourcePool,
  population,
  happiness,
  regions,
  save,
};
