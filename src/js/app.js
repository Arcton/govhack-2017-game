import Tock from 'tocktimer';
import City from './model/city';
import Upgrade from './model/upgrade';
import Main from './views/main';
import { sumPropertyValues } from './utils';
import styles from '../scss/app.scss';

class ExampleUpgrade extends Upgrade {
  constructor() {
    super('Example Upgrade');
    this.improve();
  }

  getResourcesDelta(elapsedMs) {
    return {
      exampleResouce: elapsedMs * this.level,
    };
  }
}

class ExampleCity extends City {
  constructor() {
    super('Example City', [new ExampleUpgrade()]);
  }
}

const cities = [new ExampleCity(), new ExampleCity()];
let prevTick = 0;
const timer = new Tock({
  interval: 100,
  callback: () => {
    const totalElapsedTime = timer.lap();
    const elapsedMs = totalElapsedTime - prevTick;
    prevTick = totalElapsedTime;
    const resourcesDelta = {};
    cities.forEach((city) => {
      sumPropertyValues(resourcesDelta, city.tick(elapsedMs));
    });
    console.log(resourcesDelta);
  },
});

timer.start();

const mainView = new Main();

mainView.render();
document.querySelector('[data-hook=main-outlet]').appendChild(mainView.el);
