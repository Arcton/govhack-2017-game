import State from 'ampersand-state';

const CostState = State.extend({
  extraProperties: 'allow',
});

export default State.extend({
  props: {
    id: 'string',
    name: 'string',
    level: 'number',
    cost: 'state',
  },

  initialize(attributes, options) {
    this.level = this.level || 0;
    this.deltaCallback = options.deltaCallback;
  },

  improve() {
    this.level += 1;
    return this.cost;
  },

  getResourcesDelta(elapsedTicks) {
    // returns an object of { resource: netAmount }
    // must have NO side affects
    return this.deltaCallback(elapsedTicks);
  },

  tick(elapsedTicks) {
    // handle tick for an upgrade
    return this.getResourcesDelta(elapsedTicks);
  },
});
