FROM node:slim
WORKDIR /usr/src/app
COPY index.js .
COPY package.json .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]