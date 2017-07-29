import Tock from 'tocktimer';
import City from './model/city';
import Upgrade from './model/upgrade';
import ResourcePool from './model/resource-pool';
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

const exampleCity = new City({
  upgrades: [exampleUpgrade],
});

const resourcePool = new ResourcePool();

const cities = [exampleCity];
let prevTick = 0;
const timer = new Tock({
  interval: 100,
  callback: () => {
    const totalElapsedTime = timer.lap();
    const elapsedTicks = Math.round((totalElapsedTime - prevTick) / 100);
    prevTick = totalElapsedTime;
    const resourcesDelta = {};
    cities.forEach((city) => {
      sumPropertyValues(resourcesDelta, city.tick(elapsedTicks));
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
  cities,
};
