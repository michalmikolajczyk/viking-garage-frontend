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
# RUN webpack
# ENV NODE_ENV=production
# ENV PORT=4000
CMD [ "npm", "start" ]
