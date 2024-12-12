FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

ENV NEXT_PUBLIC_API_URL=https://service-789.nutre.ai

COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_URL=https://service-789.nutre.ai

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3002
CMD ["npm", "start"]