import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-mind-привычка-дня', 'Unit | Serializer | i-i-s-mind-привычка-дня', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-mind-привычка-дня',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-mind-t-тип-результата',
    'transform:i-i-s-mind-тип-результата',

    'model:i-i-s-mind-день-из-жизни',
    'model:i-i-s-mind-моя-жизнь',
    'model:i-i-s-mind-практикуемая-привычка',
    'model:i-i-s-mind-привычка-дня',
    'model:i-i-s-mind-привычка',
    'model:i-i-s-mind-результат-дня',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
