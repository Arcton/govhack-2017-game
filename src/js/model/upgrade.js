import State from 'ampersand-state';
import Game from '../main';

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
    Object.entries(this.costs).forEach(([name, amount]) => {
      this.costs[name] *= 2;
      const resource = Game.resourcePool.get(name);
      if (resource == null) {
        return;
      }
      resource.amount -= amount;
    });
    this.level += 1;
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
