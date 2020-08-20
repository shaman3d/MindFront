import { Serializer as ДеньИзЖизниSerializer } from
  '../mixins/regenerated/serializers/i-i-s-mind-день-из-жизни';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДеньИзЖизниSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
