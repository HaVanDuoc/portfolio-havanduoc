# 2 sides: node is require docker prepare node environment and sides 2 is version of node
FROM node:18-alpine
WORKDIR /server
COPY package*.json .
RUN yarn install
COPY . .
EXPOSE 3002
CMD ["yarn", "start"]

# docker build -t server .
# docker run -dp 127.0.0.1:3001:3001 server