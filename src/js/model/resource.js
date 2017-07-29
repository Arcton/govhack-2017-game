import State from 'ampersand-state';

export default State.extend({
  props: {
    id: 'string',
    amount: 'number',
    name: 'string',
    isActive: 'boolean',
  },

  initialize() {
    this.amount = this.amount || 0;
    this.isActive = this.isActive || false;
  },
});
