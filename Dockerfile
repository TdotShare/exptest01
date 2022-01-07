FROM node:latest

# Create app directory
WORKDIR /app
COPY . /app

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]