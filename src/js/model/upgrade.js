import State from 'ampersand-state';
import Game from '../main';

const CostState = State.extend({
  extraProperties: 'allow',
});

const ProductionState = State.extend({
  extraProperties: 'allow',
});

export default State.extend({
  props: {
    id: 'string',
    name: 'string',
    level: 'number',
    costs: 'state',
    production: 'state',
  },

  initialize(attributes, options) {
    this.id = this.id || this.name.toLowerCase();
    this.level = this.level || 0;
    this.deltaCallback = options.deltaCallback || this.defaultDeltaCallback;
    if (options.costs == null || Object.keys(options.costs).length === 0) {
      options.costs = {};
      this.production = this.production || new ProductionState(options.production);
      Object.keys(this.production.getAttributes({ props: true })).forEach((id) => {
        options.costs[id] = 1000;
      });
    }
    this.costs = this.costs || new CostState(options.costs);
  },

  defaultDeltaCallback(elapsedTicks, level) {
    const resourcesDelta = {};
    Object.entries(this.production.getAttributes({ props: true })).forEach(([name, amount]) => {
      resourcesDelta[name] = amount * elapsedTicks * level;
    });
    return resourcesDelta;
  },

  improve() {
    Object.entries(this.costs.getAttributes({ props: true })).forEach(([name, amount]) => {
      const resource = Game.resourcePool.get(name);
      resource.amount -= amount;
      this.costs[name] *= 2;
    });
    this.level += 1;
    Game.save();
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
