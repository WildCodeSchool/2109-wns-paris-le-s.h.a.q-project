FROM node:lts-alpine
RUN mkdir /app
WORKDIR /app
COPY tsconfig.json ./
COPY package*.json ./
RUN yarn
COPY src src
COPY public public
# ENV WDS_SOCKET_PORT=0
CMD yarn start