import Collection from 'ampersand-collection';
import Resource from './resource';

const ResourceCollection = Collection.extend({
  model: Resource,
  mainIndex: 'id',
});

const ResourcePool = ResourceCollection.extend({
  initialize(attributes) {
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
    if (attributes != null) {
      attributes.forEach((attribute) => {
        const instAttribute = this.get(attribute.id);
        if (instAttribute == null) {
          return;
        }
        if (attribute.isActive != null) {
          instAttribute.isActive = attribute.isActive;
        }
        if (attribute.amount != null) {
          instAttribute.amount = attribute.amount;
        }
      });
    }
  },
});

export { ResourceCollection, ResourcePool };
