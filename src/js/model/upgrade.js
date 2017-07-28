export default class Upgrade {
  constructor(name) {
    this.name = name;
    this.level = 0;
  }

  improve() {
    // TODO: how to define/get the cost?
    this.level += 1;
  }

  // eslint-disable-next-line class-methods-use-this
  tick(/* elapsedTicks */) {
    // handle tick for an upgrade
    // if multiple ticks have elapsed since the last tick, elapsedTicks > 1 (otherwise = 1)
    // returns an object of { resource: netAmount }
  }
}
