import View from 'ampersand-view';

export default View.extend({
  template: '<div class="resources-panel"></div>',
  initialize(game) {
    this.game = game;
  },

  render() {
    this.renderWithTemplate(this);
  },
});
