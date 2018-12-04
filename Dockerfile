FROM node:9.7-alpine
RUN apk add --update bash && rm -rf /var/cache/apk/*
RUN npm install -g yarn serve

WORKDIR /app

COPY ./package.json ./*yarn* ./
RUN yarn install && cp yarn.lock /tmp

ENV PATH ./node_modules/.bin:$PATH

COPY . .

EXPOSE 8000

CMD ["yarn", "run", "serve"]
