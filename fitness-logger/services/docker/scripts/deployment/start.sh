#!/bin/sh
docker-compose --env-file ./services.env -f ./docker-compose-services.yml up -d 
docker-compose --env-file ./services.env -f ./docker-compose.yml up -d 
