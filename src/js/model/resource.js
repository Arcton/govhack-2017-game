import State from 'ampersand-state';

export default State.extend({
  props: {
    id: 'string',
    amount: 'number',
    name: 'string',
    isActive: 'boolean',
  },

  initialize() {
    this.set({
      amount: 0,
      isActive: false,
    });
  },
});
