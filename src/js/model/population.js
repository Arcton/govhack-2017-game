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
        return Math.max(0, this.total - this.spent);
      },
    },
  },

  initialize() {
    this.total = this.total || 0;
    this.spent = this.spent || 0;
  },
});
