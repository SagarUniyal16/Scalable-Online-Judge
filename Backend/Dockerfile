FROM node:18-alpine
RUN npm install -g nodemon
WORKDIR /app
RUN apk update && apk add --no-cache g++ openjdk11-jdk python3
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3002

CMD ["nodemon","Index.js"]
