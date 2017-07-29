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

  derived: {
    formattedTotal: {
      deps: ['model.total'],
      fn() {
        return this.model.total.toLocaleString();
      },
    },
    formattedAvailable: {
      deps: ['model.available'],
      fn() {
        return this.model.available.toLocaleString();
      },
    },
  },

  bindings: {
    formattedTotal: '[data-hook=population]',
    formattedAvailable: '[data-hook=unassigned]',
  },

  render() {
    this.renderWithTemplate(this);
  },
});
