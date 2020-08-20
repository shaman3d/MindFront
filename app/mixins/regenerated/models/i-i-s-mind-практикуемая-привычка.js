import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  впечатление: DS.attr('string'),
  привычка: DS.belongsTo('i-i-s-mind-привычка', { inverse: null, async: false }),
  деньИзЖизни: DS.belongsTo('i-i-s-mind-день-из-жизни', { inverse: 'практикуемаяПривычка', async: false })
});

export let ValidationRules = {
  впечатление: {
    descriptionKey: 'models.i-i-s-mind-практикуемая-привычка.validations.впечатление.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  привычка: {
    descriptionKey: 'models.i-i-s-mind-практикуемая-привычка.validations.привычка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  деньИзЖизни: {
    descriptionKey: 'models.i-i-s-mind-практикуемая-привычка.validations.деньИзЖизни.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПрактикуемаяПривычкаE', 'i-i-s-mind-практикуемая-привычка', {
    впечатление: attr('Впечатление', { index: 0 }),
    привычка: belongsTo('i-i-s-mind-привычка', 'Привычка', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
