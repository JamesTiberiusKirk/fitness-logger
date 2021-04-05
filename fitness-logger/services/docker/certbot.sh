#!/bin/sh
certbot certonly \
  --dns-digitalocean \
  --dns-digitalocean-credentials /home/darthvader/.secrets/certbot/digitalocean.ini \
  --dns-digitalocean-propagation-seconds 60 \
  -d api.logger.fitness \

