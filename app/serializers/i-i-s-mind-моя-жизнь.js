import { Serializer as МояЖизньSerializer } from
  '../mixins/regenerated/serializers/i-i-s-mind-моя-жизнь';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МояЖизньSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
