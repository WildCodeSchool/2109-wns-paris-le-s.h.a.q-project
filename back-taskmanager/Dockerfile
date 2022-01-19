FROM node:lts-alpine
RUN mkdir /server
WORKDIR /server
COPY tsconfig.json ./
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY src src
CMD yarn start