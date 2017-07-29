import State from 'ampersand-state';

export default State.extend({
  props: {
    name: 'string',
    total: 'number',
    value: 'number',
  },

  initialize() {
    this.total = this.total || 0;
    this.value = this.value || 0;
  },
});
