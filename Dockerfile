FROM node:22-alpine

ENV NODE_ENV=production
WORKDIR /app

# dependencies first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# site files + server
COPY index.html server.js ./
COPY css ./css
COPY js ./js

USER node
EXPOSE 4173
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:4173/ >/dev/null || exit 1

CMD ["node", "server.js"]
