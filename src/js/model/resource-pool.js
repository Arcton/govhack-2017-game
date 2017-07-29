import Collection from 'ampersand-collection';
import Resource from './resource';

const ResourceCollection = Collection.extend({
  model: Resource,
  mainIndex: 'id',
});

const ResourcePool = ResourceCollection.extend({
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

export { ResourceCollection, ResourcePool };
