ARG env
FROM mhart/alpine-node:8.12 AS alpine-base
WORKDIR /usr/src/app
COPY ["./nginx.conf", "./newsquirrel.com", "./"]

FROM alpine-base AS production-essentials
RUN apk update && apk add --no-cache certbot && \
  mkdir /run/nginx && apk add --no-cache nginx && \
  adduser -D -g 'www' www &&  mkdir /var/www/newsquirrel && \
  mkdir /etc/nginx/sites-available && mkdir /etc/nginx/sites-enabled && \
  yes | cp -rf ./nginx.conf /etc/nginx/ && cp ./newsquirrel.com /etc/nginx/sites-available/ && \
  ln -s /etc/nginx/sites-available/newsquirrel.com /etc/nginx/sites-enabled/newsquirrel.com && \
  rm /etc/nginx/conf.d/default.conf && \
  rm -rf /var/cache/apk
 

FROM alpine-base AS development-build
COPY . .
RUN npm install --development

FROM production-essentials AS production-build
COPY . .
RUN npm install --production && npm run build && cp -a ./build/. /var/www/newsquirrel && \
   mv ./run.sh ../ && cd .. && rm -r ./app/* && mv ./run.sh ./app

FROM ${env}-build
ARG env
ENV env=${env}
ENTRYPOINT [ "./run.sh" ]