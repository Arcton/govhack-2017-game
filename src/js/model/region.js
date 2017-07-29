import State from 'ampersand-state';
import Collection from 'ampersand-collection';
import Upgrade from './upgrade';
import Game from '../main';
import { sumPropertyValues } from '../utils';

const UpgradeCollection = Collection.extend({
  mainIndex: 'id',
  model: Upgrade,
});

const DeltaState = State.extend({
  extraProperties: 'allow',
});

export default State.extend({
  props: {
    name: 'string',
    cost: 'number',
    isActive: 'boolean',
    lastDelta: 'state',
  },

  collections: {
    upgrades: UpgradeCollection,
  },

  initialize() {
    this.cost = this.cost || 0;
    this.isActive = this.isActive || false;
    this.lastDelta = new DeltaState();
  },

  unlock() {
    Game.population.spent += this.cost;
    this.isActive = true;
    Game.save();
  },

  tick(elapsedTicks) {
    // handle tick for a region
    // returns an object of { resource: netAmount }
    const resourcesDelta = {};
    const baseDelta = {};
    this.upgrades.forEach((upgrade) => {
      sumPropertyValues(resourcesDelta, upgrade.tick(elapsedTicks));
      sumPropertyValues(baseDelta, upgrade.getResourcesDelta(1));
    });

    this.lastDelta.set(baseDelta);
    return resourcesDelta;
  },
});
