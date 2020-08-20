import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISMindДеньИзЖизниLForm from './forms/i-i-s-mind-день-из-жизни-l';
import IISMindМояЖизньLForm from './forms/i-i-s-mind-моя-жизнь-l';
import IISMindПривычкаLForm from './forms/i-i-s-mind-привычка-l';
import IISMindДеньИзЖизниEForm from './forms/i-i-s-mind-день-из-жизни-e';
import IISMindМояЖизньEForm from './forms/i-i-s-mind-моя-жизнь-e';
import IISMindПривычкаEForm from './forms/i-i-s-mind-привычка-e';
import IISMindДеньИзЖизниModel from './models/i-i-s-mind-день-из-жизни';
import IISMindМояЖизньModel from './models/i-i-s-mind-моя-жизнь';
import IISMindПрактикуемаяПривычкаModel from './models/i-i-s-mind-практикуемая-привычка';
import IISMindПривычкаДняModel from './models/i-i-s-mind-привычка-дня';
import IISMindПривычкаModel from './models/i-i-s-mind-привычка';
import IISMindРезультатДняModel from './models/i-i-s-mind-результат-дня';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-mind-день-из-жизни': IISMindДеньИзЖизниModel,
    'i-i-s-mind-моя-жизнь': IISMindМояЖизньModel,
    'i-i-s-mind-практикуемая-привычка': IISMindПрактикуемаяПривычкаModel,
    'i-i-s-mind-привычка-дня': IISMindПривычкаДняModel,
    'i-i-s-mind-привычка': IISMindПривычкаModel,
    'i-i-s-mind-результат-дня': IISMindРезультатДняModel
  },

  'application-name': 'Mind',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Mind',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Mind',
          title: 'Mind'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        mind: {
          caption: 'Mind',
          title: 'Mind',
          'i-i-s-mind-день-из-жизни-l': {
            caption: 'День из жизни',
            title: ''
          },
          'i-i-s-mind-моя-жизнь-l': {
            caption: 'Моя жизнь',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-mind-привычка-l': {
            caption: 'Привычка',
            title: 'Привычка'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
