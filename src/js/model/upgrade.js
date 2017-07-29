import State from 'ampersand-state';

export default State.extend({
  props: {
    name: 'string',
    level: 'number',
  },

  initialize(attributes, options) {
    this.level = this.level || 0;
    this.deltaCallback = options.deltaCallback;
  },

  improve() {
    // TODO: how to define/get the cost?
    this.level += 1;
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
