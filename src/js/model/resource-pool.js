import Collection from 'ampersand-collection';
import Resource from './resource';

export default Collection.extend({
  model: Resource,
  mainIndex: 'id',

  initialize() {
    this.add([
      {
        id: 'utilities',
        name: 'Utilities',
      },
      {
        id: 'agriculture',
        name: 'Agriculture',
      },
      {
        id: 'mining',
        name: 'Mining',
      },
      {
        id: 'education',
        name: 'Education',
      },
      {
        id: 'tourism',
        name: 'Tourism',
      },
    ]);
  },
});
