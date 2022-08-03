FROM node:16.16.0-alpine3.16

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]