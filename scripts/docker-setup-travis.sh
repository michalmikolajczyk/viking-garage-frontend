#!/bin/bash
docker build -t vikinggarage/viking-garage-frontend:latest ./
docker run -p 127.0.0.1:80:3000 --name viking-garage-frontend -e TRAVIS="1" vikinggarage/viking-garage-frontend:latest
# docker run --name viking-garage-frontend-container viking-garage-frontend-image
