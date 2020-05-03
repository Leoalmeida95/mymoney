FROM node:11-alpine

WORKDIR /node-app

COPY package.json .

RUN npm install --quiet

RUN npm install nodemon -g --quiet

COPY /src/loader.js .

EXPOSE 3003

CMD nodemon -L --watch . src/loader.js