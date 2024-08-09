FROM node:20.16 AS base

ENV DIR /app
WORKDIR $DIR

FROM base AS build

COPY . .

RUN npm ci
RUN npm run build && \
    npm prune --production

FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]