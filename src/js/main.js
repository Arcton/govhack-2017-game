import Tock from 'tocktimer';
import Region from './model/region';
import Upgrade from './model/upgrade';
import Population from './model/population';
import Progress from './model/progress-resource';
import { ResourcePool } from './model/resource-pool';
import { sumPropertyValues } from './utils';
import { saveState, loadState, resetState } from './loader';

const regions = {
  northland: new Region(),
  auckland: new Region(),
  waikato: new Region({
    upgrades: [
      new Upgrade({
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
        level: 1,
      }, {
        deltaCallback(elapsedTicks) {
          return {
            energy: elapsedTicks * 1.5,
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
  if (state != null) {
    savedResources = state.resourcePool;
    savedHappiness = state.happiness;
    savedPopulation = state.population;
  }
  return {
    resourcePool: new ResourcePool(savedResources),
    population: new Population(Object.assign({}, { total: 10 }, savedPopulation)),
    happiness: new Progress(Object.assign({}, { value: 75 }, savedHappiness, { name: 'Happiness', total: 100 })),
  };
});

let prevTick = 0;
const timer = new Tock({
  interval: 100,
  callback: (tick) => {
    const totalElapsedTime = timer.lap();
    const elapsedTicks = Math.round((totalElapsedTime - prevTick) / 100);
    prevTick = totalElapsedTime;
    const resourcesDelta = {};
    Object.values(regions).forEach((region) => {
      sumPropertyValues(resourcesDelta, region.tick(elapsedTicks));
    });

    Object.entries(resourcesDelta).forEach(([key, value]) => {
      const resource = resourcePool.get(key);
      if (resource == null) {
        return;
      }

      resource.amount += value;
    });

    if ((tick.timeout % 60) === 0) {
      saveState({ resourcePool, population, happiness, regions });
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
