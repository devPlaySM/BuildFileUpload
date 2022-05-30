FROM node:latest

COPY package.json /src/package.json

RUN cd /src; npm install -g npm@8.10.0

COPY . /src

EXPOSE 4000

WORKDIR /src

CMD ["node" , "startServer.js"]