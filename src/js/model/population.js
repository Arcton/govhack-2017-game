import State from 'ampersand-state';

export default State.extend({
  props: {
    total: 'number',
    spent: 'number',
  },

  derived: {
    available: {
      deps: ['total', 'spent'],
      fn() {
        return this.total - this.spent;
      },
    },
  },
});
