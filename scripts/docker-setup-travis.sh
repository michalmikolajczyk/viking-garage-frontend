#!/bin/bash
docker build -t viking-garage-frontend-image ./
docker run -e TRAVIS=$TRAVIS -p 127.0.0.1:80:3000 --name viking-garage-frontend-container viking-garage-frontend-image
# docker run --name viking-garage-frontend-container viking-garage-frontend-image
