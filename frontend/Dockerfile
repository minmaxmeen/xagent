FROM node:20-alpine

WORKDIR /app

# copy package files first for better caching
COPY package.json package-lock.json* ./

# Install dependencies (try `ci` then fall back to install)
RUN npm ci --omit=dev || npm install

# copy the rest
COPY . .

# build
RUN npm run build

EXPOSE 3000

CMD ["npm","start"]
