import View from 'ampersand-view';
import ResourcesPanel from './resources-panel';

export default View.extend({
  template: `<div class="game-container">
    <div data-hook=resources-slot></div>
  </div>`,
  initialize(game) {
    this.game = game;
  },

  subviews: {
    resources: {
      selector: '[data-hook=resources-slot]',
      prepareView(el) {
        return new ResourcesPanel({
          el,
        });
      },
    },
  },

  render() {
    this.renderWithTemplate(this);
  },
});
