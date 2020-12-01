import { Kafka, ProducerRecord } from 'kafkajs';

const kafka: Kafka = new Kafka({
    clientId: 'test-ts-kafka-app',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();

async function run() {

    await producer.connect();

    const payload: ProducerRecord = {
        topic: 'test1topic',
        messages: [
            { value: 'test message' }
        ]
    };

    const data = await producer.send(payload);
    console.log(data);
}

run().catch(console.error);