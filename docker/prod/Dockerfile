FROM node:26-alpine3.23 as builder

WORKDIR /app

COPY . .

RUN npm ci && npm install -g @angular/cli

RUN ng build --output-hashing=all

FROM nginx:1.31.2-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./docker/prod/nginx.conf /etc/nginx/nginx.conf