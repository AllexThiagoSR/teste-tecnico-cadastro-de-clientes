FROM node:18.17.0
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY ./ ./
ENV API_HOST=backend
ENV API_PROTOCOL=http
ENV API_PORT=3001
ENV URL_BASE=$API_PROTOCOL://$API_HOST:$API_PORT/api/
ENTRYPOINT [ "npm", "run" ]
CMD ["start"]