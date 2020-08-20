import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  впечатление: DS.attr('string'),
  привычка: DS.belongsTo('i-i-s-mind-привычка', { inverse: null, async: false }),
  деньИзЖизни: DS.belongsTo('i-i-s-mind-день-из-жизни', { inverse: 'привычкаДня', async: false })
});

export let ValidationRules = {
  впечатление: {
    descriptionKey: 'models.i-i-s-mind-привычка-дня.validations.впечатление.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  привычка: {
    descriptionKey: 'models.i-i-s-mind-привычка-дня.validations.привычка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  деньИзЖизни: {
    descriptionKey: 'models.i-i-s-mind-привычка-дня.validations.деньИзЖизни.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
