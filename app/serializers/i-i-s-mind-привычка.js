import { Serializer as ПривычкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-mind-привычка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПривычкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
