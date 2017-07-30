import View from 'ampersand-view';

export default View.extend({
  template() {
    const id = this.model.id;
    return `
    <div class="resource" data-hook="container">
      <span class="resource__name" data-hook="name">
        <svg class="icon">
          <use xlink:href="#${id}"></use>
        </svg>
      </span>
      <span class="resource__amount" data-hook="amount"></span>
    </div>`;
  },

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

  events: {
    click: 'click',
  },

  click(event) {
    this.model.amount += 1000;
  },

  render({ containerEl }) {
    this.renderWithTemplate(this);
    this.el.classList.add(`resource--${this.model.id}`);
    containerEl.appendChild(this.el);
  },
});
