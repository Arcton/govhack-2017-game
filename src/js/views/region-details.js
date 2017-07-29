import View from 'ampersand-view';
import Game from '../main';
import ResourceDeltaView from './resource-delta';
import UpgradeView from './upgrade';

export default View.extend({
  template: `<div class="modal">
    <button class="button button--white modal__close" data-hook="close">X</button>
    <div class="modal__inner">
      <h2 class="h2" data-hook="region-name"></h2>
      <div class="modal__stat"><span>Population:</span> <span data-hook="population"></span></div>
      <button class="button" data-hook="buy">Start population working</button>
      <h3 class="h3">Production Rate</h3>
      <div data-hook="resource-list" class="resource-list"></div>
      <h3 class="h3">Upgrades</h3>
      <div data-hook="upgrades-container"></div>
    </div>
  </div>`,

  events: {
    'click [data-hook=buy]': 'buyCity',
    'click [data-hook=close]': 'close',
  },

  derived: {
    canAfford: {
      deps: ['game.population.available', 'model.cost'],
      fn() {
        return this.game.population.available - this.model.cost >= 0;
      },
    },

    formattedPopulation: {
      deps: ['model.cost'],
      fn() {
        return this.model.cost.toLocaleString();
      },
    },
  },

  bindings: {
    'model.name': '[data-hook=region-name]',
    formattedPopulation: '[data-hook=population]',
    'model.isActive': {
      type: 'toggle',
      hook: 'buy',
      invert: true,
    },
    canAfford: {
      type: 'booleanAttribute',
      name: 'disabled',
      hook: 'buy',
      invert: true,
    },
  },

  initialize() {
    this.game = Game;
  },

  render() {
    this.renderWithTemplate(this);
    this.renderCollection(Game.resourcePool, ResourceDeltaView, this.el.querySelector('[data-hook=resource-list]'), {
      viewOptions: {
        deltas: this.model.lastDelta,
      },
    });

    this.renderCollection(this.model.upgrades, UpgradeView, this.el.querySelector('[data-hook=upgrades-container]'));
  },

  buyCity() {
    // TODO: maybe move this to a higher-up object, so we're not reaching into the game state
    if (this.model.isActive && Game.population.available < this.model.cost) {
      return;
    }

    const cost = this.model.unlock();
    Game.population.spent += cost;
  },

  close() {
    this.remove();
  },
});
