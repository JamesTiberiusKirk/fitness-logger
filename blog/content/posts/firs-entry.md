---
title: "Firs Entry"
date: 2020-11-29
draft: false
---

Today I am finally getting started with development. So far it will just be getting familiar with using some of the technologies that I will be using. Today it's kafka.

I have started by locally deploying a kafka stack on my local machine using docker-compose with Zookeeper and using Conduktor as a gui client for kafka.

So far I have just done this in javascript. Will get this done in typescript too.

So far I have been using the 'kafka-node' npm package, which comes with its own types, however, they seem to not be documented well, although, the source seems to be easy to read. With all that in mind, I am still having some problems connecting to the kafka setup. Zookeeper keeps complaining about 'no connection established for the client'.

## Notes to self
Found out that when I'm trying to produce and consume data, I need to treat them as strings or arrays of strings. If I'm producing them as arrays of strings, they will need to be added in as separate messages.

When producing, the partition and the offset are returned to the 'ready' callback, however it only returns it for the first item in the array if you are producing one.

# Resources used
- [NPM Kafka-node](https://www.npmjs.com/package/kafka-node#kafkaclient)
- [Getting Started with Kafka and nodejs](https://thatcoder.space/getting-started-with-kafka-and-node-js-with-example/)
- [kafka-stack-docker-compose](https://github.com/simplesteph/kafka-stack-docker-compose)
- [Conduktor](https://www.conduktor.io/)

