import View from 'ampersand-view';

export default View.extend({
  template: `<div class="resource" data-hook="container">
    <span class="resource__name" data-hook="name"></span>
    <span class="resource__amount" data-hook="amount"></span>
  </div>`,

  bindings: {
    'model.name': '[data-hook=name]',
    'model.amount': '[data-hook=amount]',
  },

  render({ containerEl }) {
    this.renderWithTemplate(this);
    this.el.classList.add(`resource--${this.model.id}`);
    containerEl.appendChild(this.el);
  },
});
