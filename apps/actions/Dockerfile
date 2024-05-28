FROM ubuntu:20.04

# Set the environment variable to prevent interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies
RUN apt-get update && apt-get install -y \
  texlive-latex-base \
  texlive-fonts-recommended \
  texlive-latex-recommended \
  texlive-latex-extra \
  tzdata \
  curl \
  && rm -rf /var/lib/apt/lists/*

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
  apt-get install -y nodejs

# Install pnpm
RUN npm install -g pnpm

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install --prod

# Bundle app source
COPY dist/ ./dist/

# Run the application
ENTRYPOINT ["node", "dist/index.js"]
