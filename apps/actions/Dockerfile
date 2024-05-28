FROM ubuntu:20.04

# Install dependencies
RUN apt-get update && apt-get install -y \
  texlive-latex-base \
  texlive-fonts-recommended \
  texlive-latex-recommended \
  texlive-latex-extra \
  && rm -rf /var/lib/apt/lists/*

# Install Node.js
RUN apt-get update && apt-get install -y curl && \
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
  apt-get install -y nodejs

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --only=production

# Bundle app source
COPY dist/ ./dist/

# Run the application
ENTRYPOINT ["node", "dist/index.js"]