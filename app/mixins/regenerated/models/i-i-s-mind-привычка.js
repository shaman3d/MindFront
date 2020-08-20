import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  приоритет: DS.attr('string')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-mind-привычка.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  приоритет: {
    descriptionKey: 'models.i-i-s-mind-привычка.validations.приоритет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПривычкаE', 'i-i-s-mind-привычка', {
    наименование: attr('Наименование', { index: 0 }),
    приоритет: attr('Приоритет', { index: 1 })
  });

  modelClass.defineProjection('ПривычкаL', 'i-i-s-mind-привычка', {
    наименование: attr('Наименование', { index: 0 }),
    приоритет: attr('Приоритет', { index: 1 })
  });
};
