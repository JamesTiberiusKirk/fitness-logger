import { Kafka, EachMessagePayload } from 'kafkajs';

const kafka: Kafka = new Kafka({
    clientId: 'test-ts-kafka-app',
    brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: 'test-group' });

async function run() {

    await consumer.connect();
    await consumer.subscribe({ topic: 'test1topic' });

    await consumer.run({
        eachMessage: messageHandler
    });
}


async function messageHandler(data: EachMessagePayload){
    console.log(data.message);
}

run().catch(console.error);