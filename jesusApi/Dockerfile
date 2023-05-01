FROM node:18

WORKDIR /home/pptruser

COPY package*.json ./

RUN yarn

COPY ./ ./

# Expose app
EXPOSE 3000

ARG API_KEY
ENV API_KEY=${API_KEY}

# Run app
CMD ["CMD", "yarn start"]