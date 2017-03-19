# Dockerfile
FROM node
WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/
RUN npm install --quiet
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
RUN cp config.js.example config.js
RUN [ "x$CI" != "x" ] && npm test
RUN [ "x$CI" != "x" ] && exit 0
CMD [ "npm", "start" ]
