FROM strapi/base

WORKDIR /himapersiskbb-cms

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn --pure-lockfile

ENV NODE_ENV production
