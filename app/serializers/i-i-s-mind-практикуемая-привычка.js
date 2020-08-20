import { Serializer as ПрактикуемаяПривычкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-mind-практикуемая-привычка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПрактикуемаяПривычкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
