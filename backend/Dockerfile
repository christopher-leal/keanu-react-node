FROM node:20.16-alpine3.20 AS base

ENV DIR /app
WORKDIR $DIR

FROM base AS build

COPY . .

RUN npm ci
RUN npm run build && \
    npm prune --production

FROM base AS production

COPY --from=build $DIR/node_modules $DIR/node_modules
COPY --from=build $DIR/dist $DIR/dist
COPY --from=build $DIR/.env.example $DIR/.env

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]