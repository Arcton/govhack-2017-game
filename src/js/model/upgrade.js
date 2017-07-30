import State from 'ampersand-state';
import Game from '../main';
import { RESOURCES } from '../consts';

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
    if (this.costs == null && options.costs == null) {
      const resourceIds = [];
      RESOURCES.forEach((resource) => {
        resourceIds.push(resource.id);
      });
      options.costs = {};
      const resourceCount = Math.max(1, Math.floor(Math.random() * resourceIds.length));
      const shuffled = resourceIds.sort(() => 0.5 - Math.random());
      for (let i = 0; i < resourceCount; i += 1) {
        const id = shuffled[i];
        options.costs[id] = 500 + Math.round(Math.random() * 500);
      }
    }
    this.costs = this.costs || new CostState(options.costs);
    this.production = this.production || new ProductionState(options.production);
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
