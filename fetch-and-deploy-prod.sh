#!/bin/sh
# fetch-and-deploy-prod.sh
# docker rm -f
docker system prune -a --volumes -f && \
docker-compose -f docker-compose.prod.yml down && \
git pull origin master && \
docker-compose -f docker-compose.prod.yml pull && \
GATEWAY_PORT=8000 docker-compose -f docker-compose.prod.yml up --build -d;
