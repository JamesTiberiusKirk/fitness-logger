#!/bin/sh
docker-compose --env-file ./services.env -f ./docker-compose.yml down
docker-compose --env-file ./services.env -f ./docker-compose.yml rm
docker-compose --env-file ./services.env -f ./docker-compose.yml pull
docker-compose --env-file ./services.env -f ./docker-compose.yml up -d

