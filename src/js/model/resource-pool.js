import Collection from 'ampersand-collection';
import Resource from './resource';
import { RESOURCES } from '../consts';

const ResourceCollection = Collection.extend({
  model: Resource,
  mainIndex: 'id',
});

const ResourcePool = ResourceCollection.extend({
  initialize(attributes) {
    this.add(RESOURCES);
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
