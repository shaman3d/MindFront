import { Serializer as ПривычкаДняSerializer } from
  '../mixins/regenerated/serializers/i-i-s-mind-привычка-дня';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПривычкаДняSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
