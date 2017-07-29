import View from 'ampersand-view';

export default View.extend({
  template: `<div class="basic-resource" data-hook="container">
    <span class="label">Population</span>:
    <span class="quantity" data-hook="population"></span>
    <span class="label">Unassigned</span>:
    <span class="quantity" data-hook="unassigned"></span>
  </div>`,

  bindings: {
    'model.total': '[data-hook=population]',
    'model.available': '[data-hook=unassigned]',
  },

  render() {
    this.renderWithTemplate(this);
  },
});
