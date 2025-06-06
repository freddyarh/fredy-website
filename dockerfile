FROM node:20-alpine AS dev-deps
WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS prod-deps
WORKDIR /app
COPY package.json package.json
RUN npm install --production --frozen-lockfile

FROM node:20-alpine AS prod
EXPOSE 8080
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json

# Install serve to run the static files
RUN npm install -g serve

# Use serve to run the static files
CMD ["serve", "-s", "build", "-l", "8080"]