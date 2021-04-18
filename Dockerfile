FROM node:10

WORKDIR /app

COPY /src /app

RUN npm install
RUN npm install ejs@2.6.2
RUN npm install express
RUN npm install lodash@4.17.4
CMD ["node", "server.js"]