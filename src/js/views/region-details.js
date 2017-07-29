import View from 'ampersand-view';
import Game from '../main';

export default View.extend({
  template: `<div class="modal">
    <h2 data-hook="region-name"></h2>
    <button data-hook="buy">Assign Workers</button>
  </div>`,

  events: {
    'click [data-hook=buy]': 'buyCity',
  },

  bindings: {
    'model.name': '[data-hook=region-name]',
  },

  render() {
    this.renderWithTemplate(this);
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
