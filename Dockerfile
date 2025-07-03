# Base image
FROM node:20-alpine AS deps

# Set working directory
WORKDIR /app

# Install PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy rest of the app
COPY . .

# Build the app
RUN pnpm build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Enable pnpm in runner stage (for runtime deps)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy built app and dependencies
COPY --from=deps /app ./

EXPOSE 3000

CMD ["pnpm", "start"]
