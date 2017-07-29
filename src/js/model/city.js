import State from 'ampersand-state';
import Collection from 'ampersand-collection';
import Upgrade from './upgrade';
import { sumPropertyValues } from '../utils';

const UpgradeCollection = Collection.extend({
  model: Upgrade,
});

export default State.extend({
  props: {
    name: 'string',
    cost: 'number',
    isActive: 'boolean',
  },

  collections: {
    upgrades: UpgradeCollection,
  },

  initialize() {
    this.cost = this.cost || 0;
    this.isActive = this.isActive || false;
  },

  unlock() {
    this.isActive = true;
    return this.cost;
  },

  tick(elapsedTicks) {
    // handle tick for a city
    // returns an object of { resource: netAmount }
    const resourcesDelta = {};
    this.upgrades.forEach((upgrade) => {
      sumPropertyValues(resourcesDelta, upgrade.tick(elapsedTicks));
    });
    return resourcesDelta;
  },
});
