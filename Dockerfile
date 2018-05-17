FROM node:8.9.4

ENV HOME=/home/caju

COPY package.json $HOME

RUN npm install --silent --progress=false

COPY index.js $HOME

RUN ["npm", "start"]