import View from 'ampersand-view';

export default View.extend({
  template: `<div class="resource" data-hook="container">
    <span class="resource__name" data-hook="name"></span>
    <span class="resource__delta" data-hook="delta"></span>
  </div>`,

  props: {
    resourceDelta: 'number',
  },

  initialize(opts) {
    this.deltas = opts.deltas;

    const id = this.model.id;

    this.resourceDelta = this.deltas[id];

    this.deltas.on(`change:${id}`, (model, value) => {
      this.resourceDelta = value;
    });
  },

  bindings: {
    resourceDelta: '[data-hook=delta]',
  },

  render({ containerEl }) {
    this.renderWithTemplate(this);
    this.el.classList.add(`resource--${this.model.id}`);
    containerEl.appendChild(this.el);
  },
});
