import { Serializer as РезультатДняSerializer } from
  '../mixins/regenerated/serializers/i-i-s-mind-результат-дня';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РезультатДняSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
