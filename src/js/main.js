import Tock from 'tocktimer';
import Region from './model/region';
import Upgrade from './model/upgrade';
import { ResourcePool } from './model/resource-pool';
import { sumPropertyValues } from './utils';

const exampleUpgrade = new Upgrade({}, {
  deltaCallback(elapsedTicks) {
    return {
      mining: elapsedTicks * this.level,
      tourism: elapsedTicks * this.level * 2,
    };
  },
});
exampleUpgrade.improve();

const exampleRegion = new Region({
  upgrades: [exampleUpgrade],
});

const resourcePool = new ResourcePool();

const regions = [exampleRegion];
let prevTick = 0;
const timer = new Tock({
  interval: 100,
  callback: () => {
    const totalElapsedTime = timer.lap();
    const elapsedTicks = Math.round((totalElapsedTime - prevTick) / 100);
    prevTick = totalElapsedTime;
    const resourcesDelta = {};
    regions.forEach((region) => {
      sumPropertyValues(resourcesDelta, region.tick(elapsedTicks));
    });
    console.log(resourcesDelta);

    Object.entries(resourcesDelta).forEach(([key, value]) => {
      const resource = resourcePool.get(key);
      if (resource == null) {
        return;
      }

      resource.amount += value;
    });
  },
});

timer.start();

export default {
  resourcePool,
  regions,
};
