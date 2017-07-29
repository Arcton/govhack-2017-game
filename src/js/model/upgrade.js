import State from 'ampersand-state';

const CostState = State.extend({
  extraProperties: 'allow',
});

export default State.extend({
  props: {
    id: 'string',
    name: 'string',
    level: 'number',
    costs: 'state',
  },

  initialize(attributes, options) {
    this.level = this.level || 0;
    this.deltaCallback = options.deltaCallback;

    // TODO: remove
    this.costs = new CostState({
      technology: 1000,
      mining: 200,
    });
  },

  improve() {
    this.level += 1;
    return this.cost;
  },

  getResourcesDelta(elapsedTicks, level = this.level) {
    // returns an object of { resource: netAmount }
    // must have NO side affects
    return this.deltaCallback(elapsedTicks, level);
  },

  tick(elapsedTicks) {
    // handle tick for an upgrade
    return this.getResourcesDelta(elapsedTicks);
  },
});
