FROM node:14.16.1-alpine

WORKDIR /usr/simple-api/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]