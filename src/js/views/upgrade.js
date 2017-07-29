import View from 'ampersand-view';
import Game from '../main';

export default View.extend({
  template() {
    const costs = this.model.costs;

    let costsHtml = '';
    Object.keys(costs.getAttributes({ props: true })).forEach((k) => {
      costsHtml += `<div class="resource">
        <span class="resource__name"></span>
        <span class="resource__delta">${costs[k]}</span>
      </div>`;
    });

    const currentGains = this.model.getResourcesDelta(1, this.model.level);
    const gains = this.model.getResourcesDelta(1, this.model.level + 1);

    let gainsHtml = '';
    Object.keys(gains).forEach((k) => {
      const current = currentGains[k] || 0;

      gainsHtml += `<div class="resource">
        <span class="resource__name"></span>
        <span class="resource__delta">${gains[k] - current}</span>
      </div>`;
    });

    return `
    <div class="upgrade" data-hook="container">
      <span class="upgrade__title" data-hook="name"></span>
      <div class="upgrade__content">

        <div class="upgrade__cost-section">
          <span class="upgrade__subtitle">Pay:</span>
          <div class="resource-list resource-list--simple">
            ${costsHtml}
          </div>
        </div>

        <div class="upgrade__cost-section">
          <span class="upgrade__subtitle">Get:</span>
          <div class="resource-list resource-list--simple">
            ${gainsHtml}
          </div>
         </div>
      </div>
      <div class="upgrade__button-container">
        <button class="button upgrade__button" data-hook=buy>
          Purchase
        </button>
      </div>
    </div>`;
  },

  props: {
    canAfford: 'boolean',
  },

  bindings: {
    'model.name': '[data-hook=name]',
    canAfford: {
      type: 'booleanAttribute',
      name: 'disabled',
      hook: 'buy',
      invert: true,
    },
  },

  events: {
    'click [data-hook=buy]': 'buy',
  },

  initialize() {
    this.updateCanAfford();
  },

  render() {
    this.renderWithTemplate(this);
  },

  updateCanAfford() {
    const costs = this.model.costs;

    this.canAfford = Object.keys(costs.getAttributes({ props: true }))
      .every(k => costs[k] <= Game.resourcePool.get(k).amount);
  },

  buy() {
    if (!this.canAfford) {
      return;
    }

    this.model.improve();
    this.render();
  },
});
