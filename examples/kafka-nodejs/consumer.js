
const kafka = require('kafka-node');
const bp = require('body-parser');
const config = require('./config');

try {
  const Consumer = kafka.HighLevelConsumer;
  const client = new kafka.KafkaClient(config.kafka_server);
  let consumer = new kafka.Consumer(
    client,
    [{ topic: /*config.kafka_topic*/ 'test1topic', partition: 0 }],
    {
      autoCommit: true,
      fetchMaxWaitMs: 1000,
      fetchMaxBytes: 1024 * 1024,
      encoding: 'utf8',
      fromOffset: false
    }
  );
  consumer.on('message', async function(message) {
    console.log('here');
    console.log(message);
    // let value = JSON.parse(message.value);
    console.log(message.value);
  })
  consumer.on('error', function(err) {
    console.log('error', err);
  });
}
catch(e) {
  console.log(e);
}