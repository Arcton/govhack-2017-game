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
  },

  collections: {
    upgrades: UpgradeCollection,
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
