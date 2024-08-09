FROM node:20.16 AS base

ENV DIR /app
WORKDIR $DIR

FROM base AS build

COPY . .

RUN npm ci
RUN npm run build && \
    npm prune --production

FROM base as production

COPY --from=build $DIR/node_modules $DIR/node_modules
COPY --from=build $DIR/dist $DIR/dist

ENV NODE_ENV=production

RUN npm install -g http-server

CMD ["http-server", "dist", "-p", "5173"]