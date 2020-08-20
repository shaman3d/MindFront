import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  мояЖизнь: DS.belongsTo('i-i-s-mind-моя-жизнь', { inverse: null, async: false }),
  результатДня: DS.hasMany('i-i-s-mind-результат-дня', { inverse: 'деньИзЖизни', async: false }),
  практикуемаяПривычка: DS.hasMany('i-i-s-mind-практикуемая-привычка', { inverse: 'деньИзЖизни', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-mind-день-из-жизни.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  мояЖизнь: {
    descriptionKey: 'models.i-i-s-mind-день-из-жизни.validations.мояЖизнь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  результатДня: {
    descriptionKey: 'models.i-i-s-mind-день-из-жизни.validations.результатДня.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  практикуемаяПривычка: {
    descriptionKey: 'models.i-i-s-mind-день-из-жизни.validations.практикуемаяПривычка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДеньИзЖизниE', 'i-i-s-mind-день-из-жизни', {
    дата: attr('Дата', { index: 0 }),
    мояЖизнь: belongsTo('i-i-s-mind-моя-жизнь', 'Моя жизнь', {
      описание: attr('Описание', { index: 2 })
    }, { index: 1 }),
    результатДня: hasMany('i-i-s-mind-результат-дня', 'Результат дня', {
      тип: attr('Тип', { index: 0 }),
      описание: attr('Описание', { index: 1 })
    }),
    практикуемаяПривычка: hasMany('i-i-s-mind-практикуемая-привычка', 'Практикуемая привычка', {
      впечатление: attr('Впечатление', { index: 0 }),
      привычка: belongsTo('i-i-s-mind-привычка', 'Привычка', {
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ДеньИзЖизниL', 'i-i-s-mind-день-из-жизни', {
    дата: attr('Дата', { index: 0 }),
    мояЖизнь: belongsTo('i-i-s-mind-моя-жизнь', 'Описание', {
      описание: attr('Описание', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
