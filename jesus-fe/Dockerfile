FROM node:18

WORKDIR /home/fe

COPY package*.json ./

RUN yarn

COPY ./ ./

# Expose app
EXPOSE 8080

# Run app
CMD ["CMD", "yarn dev --host"]