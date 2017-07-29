import View from 'ampersand-view';

export default View.extend({
  template: `<div class="resource" data-hook="container">
    <span class="resource__name" data-hook="name"></span>
    <span class="resource__delta" data-hook="delta"></span>
  </div>`,

  props: {
    resourceDelta: 'number',
  },

  derived: {
    direction: {
      deps: ['resourceDelta'],
      fn() {
        if (this.resourceDelta > 0) {
          return 'positive';
        } else if (this.resourceDelta === 0) {
          return 'zero';
        }

        return 'negative';
      },
    },
  },

  initialize(opts) {
    this.deltas = opts.deltas;

    const id = this.model.id;

    this.resourceDelta = this.deltas[id] || 0;

    this.deltas.on(`change:${id}`, (model, value) => {
      this.resourceDelta = value || 0;
    });
  },

  bindings: {
    resourceDelta: '[data-hook=delta]',
    direction: {
      type(el, value, previousValue) {
        const classBase = 'resource__delta';
        el.classList.remove(`${classBase}--${previousValue}`);
        el.classList.add(`${classBase}--${value}`);
      },
      hook: 'delta',
    },
  },

  render({ containerEl }) {
    this.renderWithTemplate(this);
    this.el.classList.add(`resource--${this.model.id}`);
    containerEl.appendChild(this.el);
  },
});
