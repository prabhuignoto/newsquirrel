FROM centos:latest

ENV NODE_ENV development

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN curl -sL https://rpm.nodesource.com/setup_8.x | bash - && \
  yum install -y nodejs && \
  npm install --development

EXPOSE 3000

COPY ./src ./src

COPY ./public ./public

COPY ./tslint.json ./tslint.json

COPY ./tsconfig.json ./tsconfig.json

COPY ./config-overrides.js ./config-overrides.js

COPY .env.development .env.development

CMD npm run start