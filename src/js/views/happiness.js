import View from 'ampersand-view';

export default View.extend({
  template: `<div class="progress-resource" data-hook="container">
    <span class="label" data-hook="label"></span>:
    <div class="progress">
      <div class="progress__inner" data-hook="progress"></div>
    </div>
  </div>`,

  derived: {
    progressPercent: {
      deps: ['model.total', 'model.value'],
      fn() {
        return (this.model.value / this.model.total) * 100;
      },
    },
  },

  bindings: {
    'model.name': '[data-hook=label]',
    progressPercent: {
      type(el, value) {
        el.style.width = `${value}%`;
      },
      hook: 'progress',
    },
  },

  render() {
    this.renderWithTemplate(this);
  },
});
