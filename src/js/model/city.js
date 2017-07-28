export default class City {
  constructor(name /* string */, upgrades /* [Upgrade] */) {
    this.name = name;
    this.upgrades = upgrades;
  }

  tick(elapsedTicks) {
    // handle tick for a city
    // if multiple ticks have elapsed since the last tick, elapsedTicks > 1 (otherwise = 1)
    // returns an object of { resource: netAmount }
    const resourcesDelta = {};
    this.upgrades.forEach((upgrade) => {
      const upgradeResourcesDelta = upgrade.tick(elapsedTicks);
      if (upgradeResourcesDelta == null) {
        return;
      }
      Object.entries(upgradeResourcesDelta).forEach((name, amount) => {
        // TODO: hook these into view to show effects of upgrades
        // (or they can just call upgrade.tick if we ensure they don't have side affects)
        if (resourcesDelta[name] == null) {
          resourcesDelta[name] = amount;
        } else {
          resourcesDelta[name] += amount;
        }
      });
    });
  }
}
