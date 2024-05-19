FROM node:22.2

WORKDIR /home/app

COPY package*.json .

COPY . .

RUN npm install

CMD [ "npm", "run", "build" ]