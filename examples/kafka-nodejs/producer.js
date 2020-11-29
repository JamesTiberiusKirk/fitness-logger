const kafka = require('kafka-node');
const bp = require('body-parser');
const config = require('./config');

try {
  const Producer = kafka.Producer;
  const client = new kafka.KafkaClient(config.kafka_server);
  const producer = new Producer(client);
  const kafka_topic = 'example';
  console.log(kafka_topic);
  // let payloads = [
  //   {
  //     topic: kafka_topic,
  //     messages: config.kafka_topic,
  //     key:111
  //   }
  // ];
  let payloads = [
    {
      topic: 'test1topic',
      messages: JSON.stringify({"message":"bro lets format this as json and see whats happening"}),
      key: 111
    }
  ];
  // let payloads = [
  //   {
  //     topic: 'test1topic',
  //     messages: ['test string','yet another string in the array',],
  //     key: 111
  //   }
  // ];

  producer.on('ready', async function () {
    let push_status = producer.send(payloads, (err, data) => {
      if (err) {
        console.log('[kafka-producer -> ' + kafka_topic + ']: broker update failed');
      } else {
        console.log('[kafka-producer -> ' + kafka_topic + ']: broker update success');
        console.log(data); // This seems to return the partiton : offset
      }
    });
  });

  producer.on('error', function (err) {
    console.log(err);
    console.log('[kafka-producer -> ' + kafka_topic + ']: connection errored');
    throw err;
  });
}
catch (e) {
  console.log(e);
}