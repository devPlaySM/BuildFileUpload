FROM node:latest

RUN npm install -g npm@8.10.0
RUN npm install -g serve

RUN mkdir ./build
COPY ./build ./build

ENTRYPOINT ["serve", "-s", "build"]