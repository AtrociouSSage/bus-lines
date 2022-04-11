# syntax=docker/dockerfile:1

FROM node:10.19.0

ENV NODE_ENV=production

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm", "start" ]
