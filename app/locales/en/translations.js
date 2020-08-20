import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISMindДеньИзЖизниLForm from './forms/i-i-s-mind-день-из-жизни-l';
import IISMindМояЖизньLForm from './forms/i-i-s-mind-моя-жизнь-l';
import IISMindПривычкаLForm from './forms/i-i-s-mind-привычка-l';
import IISMindДеньИзЖизниEForm from './forms/i-i-s-mind-день-из-жизни-e';
import IISMindМояЖизньEForm from './forms/i-i-s-mind-моя-жизнь-e';
import IISMindПривычкаEForm from './forms/i-i-s-mind-привычка-e';
import IISMindДеньИзЖизниModel from './models/i-i-s-mind-день-из-жизни';
import IISMindМояЖизньModel from './models/i-i-s-mind-моя-жизнь';
import IISMindПрактикуемаяПривычкаModel from './models/i-i-s-mind-практикуемая-привычка';
import IISMindПривычкаModel from './models/i-i-s-mind-привычка';
import IISMindРезультатДняModel from './models/i-i-s-mind-результат-дня';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-mind-день-из-жизни': IISMindДеньИзЖизниModel,
    'i-i-s-mind-моя-жизнь': IISMindМояЖизньModel,
    'i-i-s-mind-практикуемая-привычка': IISMindПрактикуемаяПривычкаModel,
    'i-i-s-mind-привычка': IISMindПривычкаModel,
    'i-i-s-mind-результат-дня': IISMindРезультатДняModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        mind: {
          caption: 'mind',
          title: 'mind',
          'i-i-s-mind-день-из-жизни-l': {
            caption: 'i-i-s-mind-день-из-жизни-l',
            title: 'i-i-s-mind-день-из-жизни-l'
          },
          'i-i-s-mind-моя-жизнь-l': {
            caption: 'i-i-s-mind-моя-жизнь-l',
            title: 'i-i-s-mind-моя-жизнь-l'
          }
        },
        справочники: {
          caption: 'справочники',
          title: 'справочники',
          'i-i-s-mind-привычка-l': {
            caption: 'i-i-s-mind-привычка-l',
            title: 'i-i-s-mind-привычка-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-mind-день-из-жизни-l': IISMindДеньИзЖизниLForm,
    'i-i-s-mind-моя-жизнь-l': IISMindМояЖизньLForm,
    'i-i-s-mind-привычка-l': IISMindПривычкаLForm,
    'i-i-s-mind-день-из-жизни-e': IISMindДеньИзЖизниEForm,
    'i-i-s-mind-моя-жизнь-e': IISMindМояЖизньEForm,
    'i-i-s-mind-привычка-e': IISMindПривычкаEForm
  },

});

export default translations;
