import Collection from 'ampersand-collection';
import Resource from './resource';

export default Collection.extend({
  model: Resource,
  mainIndex: 'id',

  initialize() {
    this.add([
      {
        id: 'power',
        name: 'Power',
      },
      {
        id: 'livestock',
        name: 'Livestock',
      },
    ]);
  },
});
