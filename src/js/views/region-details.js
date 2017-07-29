import View from 'ampersand-view';
import Game from '../main';
import ResourceDeltaView from './resource-delta';

export default View.extend({
  template: `<div class="modal">
    <h2 data-hook="region-name"></h2>
    <button data-hook="buy">Assign Workers</button>
    <h3>Production Rate</h3>
    <div data-hook="resource-list"></div>
  </div>`,

  events: {
    'click [data-hook=buy]': 'buyCity',
  },

  bindings: {
    'model.name': '[data-hook=region-name]',
  },

  render() {
    this.renderWithTemplate(this);
    this.renderCollection(Game.resourcePool, ResourceDeltaView, this.el.querySelector('[data-hook=resource-list]'), {
      viewOptions: {
        deltas: this.model.lastDelta,
      },
    });
  },

  buyCity() {
    // TODO: maybe move this to a higher-up object, so we're not reaching into the game state
    if (this.model.isActive && Game.population.available >= this.model.cost) {
      return;
    }

    const cost = this.model.unlock();
    Game.population.spent += cost;
  },
});
