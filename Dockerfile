FROM node:12.14.1

WORKDIR /app

COPY src src
COPY package.json package.json
COPY tsconfig.json tsconfig.json

RUN npm install && npm run tsc

EXPOSE 3000

ENTRYPOINT [ "node", "dist/server.js" ]