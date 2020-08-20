import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  описание: DS.attr('string')
});

export let ValidationRules = {
  описание: {
    descriptionKey: 'models.i-i-s-mind-моя-жизнь.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МояЖизньE', 'i-i-s-mind-моя-жизнь', {
    описание: attr('Описание', { index: 0 })
  });

  modelClass.defineProjection('МояЖизньL', 'i-i-s-mind-моя-жизнь', {
    описание: attr('Описание', { index: 0 })
  });
};
