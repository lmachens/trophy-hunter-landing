FROM node:lts-buster-slim

WORKDIR /app

COPY . .

RUN npm ci

ARG NEXT_PUBLIC_PLAUSIBLE_HOST=
ARG NEXT_PUBLIC_PLAUSIBLE_DOMAIN=

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]