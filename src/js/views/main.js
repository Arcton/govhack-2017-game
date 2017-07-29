import View from 'ampersand-view';
import ResourcesPanel from './resources-panel';
import HappinessView from './happiness';
import PopulationView from './population';
import MapView from './map';

export default View.extend({
  template: `<div class="game-container">
    <div class="panel">
      <div data-hook=resources-slot></div>
      <div data-hook=population-slot></div>
      <div data-hook=happiness-slot></div>
    </div>
    <div data-hook=map-slot></div>
  </div>`,
  initialize(game) {
    this.game = game;
  },

  subviews: {
    resources: {
      selector: '[data-hook=resources-slot]',
      prepareView(el) {
        return new ResourcesPanel({
          collection: this.game.resourcePool,
          el,
        });
      },
    },
    happiness: {
      selector: '[data-hook=happiness-slot]',
      prepareView(el) {
        return new HappinessView({
          el,
          model: this.game.happiness,
        });
      },
    },
    population: {
      selector: '[data-hook=population-slot]',
      prepareView(el) {
        return new PopulationView({
          el,
          model: this.game.population,
        });
      },
    },
    map: {
      selector: '[data-hook=map-slot]',
      prepareView(el) {
        return new MapView({
          el,
          regions: this.game.regions,
        });
      },
    },
  },

  render() {
    this.renderWithTemplate(this);
  },
});
