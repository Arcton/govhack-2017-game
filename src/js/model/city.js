import { sumPropertyValues } from '../utils';

export default class City {
  constructor(name /* string */, upgrades /* [Upgrade] */) {
    this.name = name;
    this.upgrades = upgrades;
  }

  tick(elapsedMs) {
    // handle tick for a city
    // returns an object of { resource: netAmount }
    const resourcesDelta = {};
    this.upgrades.forEach((upgrade) => {
      sumPropertyValues(resourcesDelta, upgrade.tick(elapsedMs));
    });
    return resourcesDelta;
  }
}
