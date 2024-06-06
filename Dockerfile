FROM node:22.1

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx playwright install --with-deps

COPY . .

CMD [ "npm", "run", "test-unit" ]
