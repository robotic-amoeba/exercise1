FROM node:latest
ADD . /app
WORKDIR /app
EXPOSE 80
RUN npm install
CMD ["node", "index.js"]