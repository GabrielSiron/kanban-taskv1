FROM node:16.16

WORKDIR /usr/src/app

COPY package.json ./

COPY . .

RUN npm install

RUN npm install -g ts-node

RUN npm install -g typescript

RUN node -v

RUN npx prisma migrate dev --name firstmigrate

EXPOSE 8081

CMD [ "ts-node" , "src/index.ts" ]