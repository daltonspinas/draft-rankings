FROM node:20-alpine

WORKDIR /app

COPY /draft-rankings/package.json .
COPY /draft-rankings/tailwind.config.js .
COPY /draft-rankings/tsconfig.json .


COPY /draft-rankings/public ./public
COPY /draft-rankings/src ./src

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
