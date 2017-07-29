import Tock from 'tocktimer';
import Region from './model/region';
import Upgrade from './model/upgrade';
import Population from './model/population';
import Progress from './model/progress-resource';
import { ResourcePool } from './model/resource-pool';
import { tickRegions } from './utils';
import { saveState, loadState } from './loader';

require('../index.html');

const ticksPerSecond = 10;
const millisPerTick = 1000 / ticksPerSecond;

const regions = {
  northland: new Region(),
  auckland: new Region(),
  waikato: new Region({
    name: 'Waikato',
    upgrades: [
      new Upgrade({
        id: 'wat',
        level: 1,
      }, {
        deltaCallback(elapsedTicks) {
          return {
            mining: elapsedTicks * this.level,
            technology: elapsedTicks * this.level * 2,
          };
        },
      }),
      new Upgrade({
        id: 'fak',
        level: 1,
      }, {
        deltaCallback(elapsedTicks) {
          return {
            agriculture: elapsedTicks * this.level,
            forestry: elapsedTicks * this.level * 3,
          };
        },
      }),
    ],
  }),
  bayOfPlenty: new Region(),
  gisbourne: new Region(),
  hawkesBay: new Region(),
  taranaki: new Region({
    upgrades: [
      new Upgrade({
        id: 'rekt',
        level: 1,
      }, {
        deltaCallback(elapsedTicks) {
          return {
            energy: elapsedTicks * this.level * 1.5,
          };
        },
      }),
    ],
  }),
  manawatu_wanganui: new Region(),
  wellington: new Region(),
  tasman_nelson: new Region(),
  marlborough: new Region(),
  westCoast: new Region(),
  canterbury: new Region(),
  otago: new Region(),
  southland: new Region(),
};

// resetState();

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
          upgrade.cost = savedUpgrade.cost; // TODO: do we need this? just recalculate cost from level?
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
    population: new Population(Object.assign({}, { total: 10 }, savedPopulation)),
    happiness: new Progress(Object.assign({}, { value: 75 }, savedHappiness, { name: 'Happiness', total: 100 })),
  };
});

let prevTick = 0;
const timer = new Tock({
  interval: millisPerTick,
  callback: (tick) => {
    const totalElapsedTime = timer.lap();
    const elapsedTicks = (totalElapsedTime - prevTick) / millisPerTick;
    prevTick = totalElapsedTime;

    tickRegions(elapsedTicks, regions, resourcePool);

    if ((tick.timeout % 60) === 0) {
      saveState({
        resourcePool,
        population,
        happiness,
        regions,
        timestamp: new Date().getTime(),
      });
    }
  },
});

timer.start();

export default {
  resourcePool,
  population,
  happiness,
  regions,
};
