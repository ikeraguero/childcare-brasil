FROM node:16-slim

WORKDIR /app

# COPY package.json and package-lock.json files
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

RUN npm install

RUN npx prisma generate

COPY . /app

ENV PORT=7777

EXPOSE 7777

CMD ["npm", "start"]