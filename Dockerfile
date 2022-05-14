FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY client/package*.json client/
RUN npm run install-client --only=production

COPY backend/package*.json backend/
RUN npm run install-backend --only=production

COPY client/ client/
RUN npm run build --prefix client

COPY backend/ backend/

USER node

CMD [ "npm", "start", "--prefix", "backend" ]

EXPOSE 4000