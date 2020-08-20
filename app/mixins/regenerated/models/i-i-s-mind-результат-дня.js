import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  тип: DS.attr('string'),
  описание: DS.attr('string'),
  деньИзЖизни: DS.belongsTo('i-i-s-mind-день-из-жизни', { inverse: 'результатДня', async: false })
});

export let ValidationRules = {
  тип: {
    descriptionKey: 'models.i-i-s-mind-результат-дня.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-mind-результат-дня.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  деньИзЖизни: {
    descriptionKey: 'models.i-i-s-mind-результат-дня.validations.деньИзЖизни.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РезультатДняE', 'i-i-s-mind-результат-дня', {
    тип: attr('Тип', { index: 0 }),
    описание: attr('Описание', { index: 1 })
  });
};
