FROM node:13

WORKDIR /usr/src/app

COPY package.json .


RUN yarn install

COPY gatsby-config.js .

# Optionally, copy your .env file to the container filesystem


EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]