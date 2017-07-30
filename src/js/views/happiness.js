import View from 'ampersand-view';

export default View.extend({
  template: `<div class="progress-resource" data-hook="container">
    <span class="label" data-hook="label"></span>
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
    rangeName: {
      deps: ['progressPercent'],
      fn() {
        const pc = this.progressPercent;

        if (pc < 20) {
          return 'critical';
        } else if (pc < 50) {
          return 'low';
        } else if (pc < 80) {
          return 'medium';
        }

        return 'high';
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

    rangeName: {
      type(el, value, previousValue) {
        const classBase = 'progress__inner';
        el.classList.remove(`${classBase}--${previousValue}`);
        el.classList.add(`${classBase}--${value}`);
      },
      hook: 'progress',
    },
  },

  render() {
    this.renderWithTemplate(this);
  },
});
