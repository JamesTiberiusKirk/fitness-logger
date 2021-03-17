#!/bin/sh
docker-compose -f ./docker-compose-services.yml up -d
docker-compose -f ./docker-compose.yml up -d
