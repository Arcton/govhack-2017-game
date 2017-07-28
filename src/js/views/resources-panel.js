import View from 'ampersand-view';
import ResourceView from './resource';

export default View.extend({
  template: `<div class="resources-panel">
    <div data-hook="item-container"></div>
  </div>`,

  render() {
    this.renderWithTemplate(this);

    this.renderCollection(this.collection, ResourceView, this.el.querySelector('[data-hook=item-container]'));
  },
});
