FROM mhart/alpine-node:12 AS builder
RUN addgroup -S www-data && adduser -S -g www-data www-data && mkdir app && chown www-data:www-data app
USER www-data
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . /app
RUN yarn run build

FROM mhart/alpine-node:12
RUN addgroup -S www-data && adduser -S -g www-data www-data && mkdir app && chown www-data:www-data app
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
USER www-data
CMD ["yarn", "start"]
