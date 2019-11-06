FROM node:lts-alpine
WORKDIR /src/api
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]