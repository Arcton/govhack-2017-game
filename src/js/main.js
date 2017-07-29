import Tock from 'tocktimer';
import Region from './model/region';
import Upgrade from './model/upgrade';
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

const { resourcePool } = loadState((state) => {
  const resources = state != null ? state.resourcePool : null;
  return {
    resourcePool: new ResourcePool(resources),
  };
});

let prevTick = 0;
const timer = new Tock({
  interval: 100,
  callback: () => {
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

    // save state
    // TODO: don't do this every tick
    saveState({ resourcePool, regions });
  },
});

timer.start();

export default {
  resourcePool,
  regions,
};
