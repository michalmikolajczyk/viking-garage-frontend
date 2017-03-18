# Dockerfile
FROM node
# RUN npm install webpack -g
WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
RUN cp config.js.example config.js
# RUN webpack
# ENV NODE_ENV=production
# ENV PORT=4000
# RUN adduser -D myuser
# USER myuser
ARG TRAVIS
RUN if [ -z ${TRAVIS+x} ]; then echo "no tests"; else npm test; fi
RUN if [ -z ${TRAVIS+x} ]; then echo "not the script you were looking for"; else exit 0; fi
CMD [ "npm", "start" ]
