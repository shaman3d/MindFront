import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  мояЖизнь: DS.belongsTo('i-i-s-mind-моя-жизнь', { inverse: null, async: false }),
  привычкаДня: DS.hasMany('i-i-s-mind-привычка-дня', { inverse: 'деньИзЖизни', async: false }),
  результатДня: DS.hasMany('i-i-s-mind-результат-дня', { inverse: 'деньИзЖизни', async: false })
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
  привычкаДня: {
    descriptionKey: 'models.i-i-s-mind-день-из-жизни.validations.привычкаДня.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  результатДня: {
    descriptionKey: 'models.i-i-s-mind-день-из-жизни.validations.результатДня.__caption__',
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
    })
  });

  modelClass.defineProjection('ДеньИзЖизниL', 'i-i-s-mind-день-из-жизни', {
    дата: attr('Дата', { index: 0 }),
    мояЖизнь: belongsTo('i-i-s-mind-моя-жизнь', 'Описание', {
      описание: attr('Описание', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
