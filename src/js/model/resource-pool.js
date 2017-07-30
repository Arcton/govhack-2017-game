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
        consumptionPerCapita: 0.0002,
      },
      {
        id: 'agriculture',
        name: 'Agriculture',
        consumptionPerCapita: 0.0001,
      },
      {
        id: 'mining',
        name: 'Mining',
        consumptionPerCapita: 0.00013,
      },
      {
        id: 'forestry',
        name: 'Forestry',
        consumptionPerCapita: 0.00007,
      },
      {
        id: 'technology',
        name: 'Technology',
        consumptionPerCapita: 0.00012,
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
