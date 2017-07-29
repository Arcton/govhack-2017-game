import View from 'ampersand-view';
import ResourcesPanel from './resources-panel';
import HappinessView from './happiness';
import PopulationView from './population';
import ProgressModel from '../model/progress-resource';
import PopulationModel from '../model/population';

export default View.extend({
  template: `<div class="game-container">
    <div class="panel">
      <div data-hook=resources-slot></div>
      <div data-hook=population-slot></div>
      <div data-hook=happiness-slot></div>
    </div>
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
          model: new ProgressModel({ // TODO: get from game object
            name: 'Happiness',
            total: 100,
            value: 75,
          }),
        });
      },
    },
    population: {
      selector: '[data-hook=population-slot]',
      prepareView(el) {
        return new PopulationView({
          el,
          model: new PopulationModel({ // TODO: get from game object
            total: 100,
            spent: 75,
          }),
        });
      },
    },
  },

  render() {
    this.renderWithTemplate(this);
  },
});
