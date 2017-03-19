#!/bin/bash
docker build -t viking-garage-frontend-image ./
docker run -p 3000:3000 --name viking-garage-frontend-container viking-garage-frontend-image
