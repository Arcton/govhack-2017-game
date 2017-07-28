import Tock from 'tocktimer';
import City from './model/city';
import Upgrade from './model/upgrade';
import styles from './scss/app.scss';

class ExampleUpgrade extends Upgrade {
  constructor() {
    super('Example Upgrade');
    this.improve();
  }

  tick(elapsedTicks) {
    return {
      exampleResouce: elapsedTicks * this.level,
    };
  }
}

class ExampleCity extends City {
  constructor() {
    super('Example City', [new ExampleUpgrade()]);
  }
}

const cities = [new ExampleCity()];

const tick = new Tock({
  interval: 100,
  callback: () => {
    cities.forEach((city) => {
      console.log(city.tick());
    });
  },
});

tick.start();
