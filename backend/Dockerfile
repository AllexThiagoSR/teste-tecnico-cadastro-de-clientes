FROM node:16.14
WORKDIR /backend
COPY package*.json ./
RUN npm install
COPY ./src ./src
ENTRYPOINT [ "npm", "run" ]
CMD ["start"]
