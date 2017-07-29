import View from 'ampersand-view';

export default View.extend({
  template: `<div class="basic-resource" data-hook="container">
    <div class="basic-resource__value">
      <span class="label label--light">Comrades</span>
      <span class="label" data-hook="population"></span>
    </div>

    <div class="basic-resource__value">
      <span class="label label--light">Unassigned</span>
      <span class="label" data-hook="unassigned"></span>
    </div>
  </div>`,

  bindings: {
    'model.total': '[data-hook=population]',
    'model.available': '[data-hook=unassigned]',
  },

  render() {
    this.renderWithTemplate(this);
  },
});
