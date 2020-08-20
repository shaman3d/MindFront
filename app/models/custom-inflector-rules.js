import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('привычка', 'Привычкаs');
inflector.irregular('жизни', 'Жизниs');
inflector.irregular('жизнь', 'Жизньs');
inflector.irregular('дня', 'Дняs');

export default {};
