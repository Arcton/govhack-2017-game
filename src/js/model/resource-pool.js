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
        id: 'energy',
        name: 'Energy',
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
        id: 'forestry',
        name: 'Forestry',
      },
      {
        id: 'technology',
        name: 'Technology',
      },
    ]);
  },
});

export { ResourceCollection, ResourcePool };
