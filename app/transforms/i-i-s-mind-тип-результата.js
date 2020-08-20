import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипРезультатаEnum from '../enums/i-i-s-mind-тип-результата';

export default FlexberryEnum.extend({
  enum: ТипРезультатаEnum,
  sourceType: 'IIS.Mind.ТипРезультата'
});
