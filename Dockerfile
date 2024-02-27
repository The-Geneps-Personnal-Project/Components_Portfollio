FROM oven/bun:latest

WORKDIR /app

COPY package*.json ./
RUN bun i
COPY . .
# RUN bun run build
EXPOSE 8081
CMD ["bun", "run", "dev"]

