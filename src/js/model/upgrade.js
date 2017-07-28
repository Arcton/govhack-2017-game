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
  getResourcesDelta(/* elapsedMs */) {
    // returns an object of { resource: netAmount }
    // must have NO side affects
  }

  tick(elapsedMs) {
    // handle tick for an upgrade
    return this.getResourcesDelta(elapsedMs);
  }
}
