import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-mind-практикуемая-привычка', 'Unit | Model | i-i-s-mind-практикуемая-привычка', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-mind-день-из-жизни',
    'model:i-i-s-mind-моя-жизнь',
    'model:i-i-s-mind-практикуемая-привычка',
    'model:i-i-s-mind-привычка',
    'model:i-i-s-mind-результат-дня',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
