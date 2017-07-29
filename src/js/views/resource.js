import View from 'ampersand-view';

export default View.extend({
  template: `<div class="resource" data-hook="container">
    <span class="resource__name" data-hook="name"></span><span class="resource__amount" data-hook="amount"></span>
  </div>`,

  derived: {
    displayAmount: {
      deps: ['model.amount'],
      fn() {
        const amount = Math.round(this.model.amount);

        return Number.prototype.toLocaleString ? amount.toLocaleString() : amount;
      },
    },
  },

  bindings: {
    displayAmount: '[data-hook=amount]',
  },

  render({ containerEl }) {
    this.renderWithTemplate(this);
    this.el.classList.add(`resource--${this.model.id}`);
    containerEl.appendChild(this.el);
  },
});
