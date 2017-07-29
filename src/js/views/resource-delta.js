import View from 'ampersand-view';

export default View.extend({
  template() {
    const id = this.model.id;
    return `<div class="resource" data-hook="container">
      <span class="resource__name" data-hook="name">
        <svg class="icon icon--dark">
          <use xlink:href="#${id}"></use>
        </svg>
      </span>
      <span class="resource__delta" data-hook="delta"></span>
    </div>`;
  },

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

    this.listenToAndRun(this.deltas, `change:${id}`, () => {
      this.resourceDelta = this.deltas[id] || 0;
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
