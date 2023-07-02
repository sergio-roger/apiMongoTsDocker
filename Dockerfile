FROM node:18.16-alpine

ADD . /app
WORKDIR /app
RUN npm install -g npm@9.5.0
RUN npm install pm2 -g
RUN npm install
RUN npm run build

EXPOSE 4000

CMD pm2-runtime ./dist/index.js --watch
