import View from 'ampersand-view';
import ResourceView from './resource';

export default View.extend({
  template: `<div class="resources-panel resource-list" data-hook="item-container">
  </div>`,

  render() {
    this.renderWithTemplate(this);

    this.renderCollection(this.collection, ResourceView, this.el.querySelector('[data-hook=item-container]'));
  },
});
