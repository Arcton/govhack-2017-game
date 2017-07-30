import Tock from 'tocktimer';
import Region from './model/region';
import Upgrade from './model/upgrade';
import Population from './model/population';
import Progress from './model/progress-resource';
import { ResourcePool } from './model/resource-pool';
import { tickRegions, updateResourcePool } from './utils';
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
    upgrades: [
      new Upgrade({
        name: 'Technology',
        level: 1,
      }, {
        production: {
          technology: 10,
        },
      }),
      new Upgrade({
        name: 'Forestry',
        level: 1,
      }, {
        production: {
          forestry: 10,
        },
      }),
      new Upgrade({
        name: 'Agriculture',
        level: 3,
      }, {
        production: {
          agriculture: 20,
        },
      }),
    ],
  }),
  auckland: new Region({
    name: 'Auckland',
    cost: 1593100,
    upgrades: [
      new Upgrade({
        name: 'Technology',
        level: 5,
      }, {
        production: {
          technology: 30,
        },
      }),
      new Upgrade({
        name: 'Energy',
        level: 1,
      }, {
        production: {
          energy: 20,
        },
      }),
      new Upgrade({
        name: 'Agriculture',
        level: 1,
      }, {
        production: {
          agriculture: 10,
        },
      }),
    ],
  }),
  waikato: new Region({
    name: 'Waikato',
    cost: 444400,
    upgrades: [
      new Upgrade({
        name: 'Mining',
        level: 1,
      }, {
        production: {
          mining: 10,
        },
      }),
      new Upgrade({
        name: 'Technology',
        level: 1,
      }, {
        production: {
          technology: 10,
        },
      }),
      new Upgrade({
        name: 'Energy',
        level: 3,
      }, {
        production: {
          energy: 30,
        },
      }),
      new Upgrade({
        name: 'Agriculture',
        level: 2,
      }, {
        production: {
          agriculture: 30,
        },
      }),
    ],
  }),
  bayOfPlenty: new Region({
    name: 'Bay of Plenty',
    cost: 290500,
    upgrades: [
      new Upgrade({
        name: 'Technology',
        level: 1,
      }, {
        production: {
          technology: 10,
        },
      }),
      new Upgrade({
        name: 'Energy',
        level: 1,
      }, {
        production: {
          energy: 10,
        },
      }),
      new Upgrade({
        name: 'Agriculture',
        level: 2,
      }, {
        production: {
          agriculture: 10,
        },
      }),
    ],
  }),
  gisbourne: new Region({
    name: 'Gisbourne',
    cost: 47600,
    upgrades: [
      new Upgrade({
        name: 'Technology',
        level: 1,
      }, {
        production: {
          technology: 10,
        },
      }),
      new Upgrade({
        name: 'Forestry',
        level: 1,
      }, {
        production: {
          forestry: 10,
        },
      }),
      new Upgrade({
        name: 'Agriculture',
        level: 1,
      }, {
        production: {
          agriculture: 10,
        },
      }),
    ],
  }),
  hawkesBay: new Region({
    name: 'Hawkes Bay',
    cost: 160900,
    upgrades: [
      new Upgrade({
        name: 'Technology',
        level: 1,
      }, {
        production: {
          technology: 10,
        },
      }),
      new Upgrade({
        name: 'Energy',
        level: 1,
      }, {
        production: {
          energy: 10,
        },
      }),
      new Upgrade({
        name: 'Agriculture',
        level: 2,
      }, {
        production: {
          agriculture: 10,
        },
      }),
    ],
  }),
  taranaki: new Region({
    name: 'Taranaki',
    cost: 116300,
    upgrades: [
      new Upgrade({
        name: 'Technology',
        level: 1,
      }, {
        production: {
          technology: 10,
        },
      }),
      new Upgrade({
        name: 'Energy',
        level: 3,
      }, {
        production: {
          energy: 20,
        },
      }),
      new Upgrade({
        name: 'Agriculture',
        level: 2,
      }, {
        production: {
          agriculture: 10,
        },
      }),
    ],
  }),
  manawatu_wanganui: new Region({
    name: 'Manawatu / Wanganui',
    cost: 235800,
    upgrades: [
      new Upgrade({
        name: 'Technology',
        level: 1,
      }, {
        production: {
          technology: 10,
        },
      }),
      new Upgrade({
        name: 'Energy',
        level: 1,
      }, {
        production: {
          energy: 20,
        },
      }),
      new Upgrade({
        name: 'Agriculture',
        level: 1,
      }, {
        production: {
          agriculture: 20,
        },
      }),
    ],
  }),
  wellington: new Region({
    name: 'Wellington',
    cost: 501100,
    upgrades: [
      new Upgrade({
        name: 'Technology',
        level: 4,
      }, {
        production: {
          technology: 30,
        },
      }),
      new Upgrade({
        name: 'Energy',
        level: 1,
      }, {
        production: {
          energy: 10,
        },
      }),
      new Upgrade({
        name: 'Agriculture',
        level: 1,
      }, {
        production: {
          agriculture: 10,
        },
      }),
    ],
  }),
  tasman_nelson: new Region({
    name: 'Tasman / Nelson',
    cost: 100200,
    upgrades: [
      new Upgrade({
        name: 'Technology',
        level: 1,
      }, {
        production: {
          technology: 10,
        },
      }),
      new Upgrade({
        name: 'Forestry',
        level: 1,
      }, {
        production: {
          forestry: 10,
        },
      }),
      new Upgrade({
        name: 'Agriculture',
        level: 1,
      }, {
        production: {
          agriculture: 10,
        },
      }),
    ],
  }),
  marlborough: new Region({
    name: 'Marlborough',
    cost: 45500,
    upgrades: [
      new Upgrade({
        name: 'Agriculture',
        level: 1,
      }, {
        production: {
          agriculture: 20,
        },
      }),
    ],
  }),
  westCoast: new Region({
    name: 'West Coast',
    cost: 32600,
    upgrades: [
      new Upgrade({
        name: 'Mining',
        level: 3,
      }, {
        production: {
          mining: 30,
        },
      }),
      new Upgrade({
        name: 'Agriculture',
        level: 1,
      }, {
        production: {
          agriculture: 10,
        },
      }),
    ],
  }),
  canterbury: new Region({
    name: 'Canterbury',
    cost: 594100,
    upgrades: [
      new Upgrade({
        name: 'Technology',
        level: 3,
      }, {
        production: {
          technology: 20,
        },
      }),
      new Upgrade({
        name: 'Energy',
        level: 3,
      }, {
        production: {
          energy: 20,
        },
      }),
      new Upgrade({
        name: 'Agriculture',
        level: 3,
      }, {
        production: {
          agriculture: 30,
        },
      }),
    ],
  }),
  otago: new Region({
    name: 'Otago',
    cost: 217200,
    upgrades: [
      new Upgrade({
        name: 'Mining',
        level: 4,
      }, {
        production: {
          mining: 30,
        },
      }),
      new Upgrade({
        name: 'Technology',
        level: 3,
      }, {
        production: {
          technology: 20,
        },
      }),
      new Upgrade({
        name: 'Energy',
        level: 2,
      }, {
        production: {
          energy: 20,
        },
      }),
      new Upgrade({
        name: 'Agriculture',
        level: 2,
      }, {
        production: {
          agriculture: 20,
        },
      }),
    ],
  }),
  southland: new Region({
    name: 'Southland',
    cost: 97700,
    upgrades: [
      new Upgrade({
        name: 'Mining',
        level: 2,
      }, {
        production: {
          mining: 20,
        },
      }),
      new Upgrade({
        name: 'Technology',
        level: 1,
      }, {
        production: {
          technology: 10,
        },
      }),
      new Upgrade({
        name: 'Energy',
        level: 2,
      }, {
        production: {
          energy: 20,
        },
      }),
      new Upgrade({
        name: 'Agriculture',
        level: 3,
      }, {
        production: {
          agriculture: 20,
        },
      }),
    ],
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
          if (savedUpgrade.costs != null) {
            upgrade.costs.clear();
            Object.entries(savedUpgrade.costs).forEach(([resource, amount]) => {
              upgrade.costs.set(resource, amount);
            });
          }
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
    const resourcesDelta = tickRegions(elapsedTicks, regions);
    updateResourcePool(resourcesDelta, loadedResourcePool);
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

    // population consumes resources
    resourcePool.forEach((resource) => {
      const resourceDelta = -resource.consumptionPerCapita * population.total;
      if (resourcesDelta[resource.id] == null) {
        resourcesDelta[resource.id] = resourceDelta;
      } else {
        resourcesDelta[resource.id] += resourceDelta;
      }
    });
    updateResourcePool(resourcesDelta, resourcePool);

    let newHappiness = 50;
    const happinessPerResource = (happiness.total / 2) / (resourcesCount + 1);
    let totalDelta = 0;
    // some happiness for resource production/consumption
    Object.values(resourcesDelta).forEach((delta) => {
      const clampedDelta = Math.min(Math.max(delta, -happinessPerResource), happinessPerResource);
      newHappiness += clampedDelta;
      totalDelta += delta;
    });
    // some happiness for overall production/consumption
    const clampedDelta = Math.min(Math.max(totalDelta, -happinessPerResource), happinessPerResource);
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
