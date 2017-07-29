import View from 'ampersand-view';
import ResourcesPanel from './resources-panel';
import HappinessView from './happiness';
import HappinessModel from '../model/progress-resource';

export default View.extend({
  template: `<div class="game-container">
    <div data-hook=resources-slot></div>
    <div data-hook=happiness-slot></div>
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
          model: new HappinessModel({ // TODO: get from game object
            name: 'Happiness',
            total: 100,
            value: 50,
          }),
        });
      },
    },
  },

  render() {
    this.renderWithTemplate(this);
  },
});
