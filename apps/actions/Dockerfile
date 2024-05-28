# Use a minimal Debian-based image
FROM debian:bullseye-slim

# Install dependencies and TeXLive
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    texlive-full \
    ca-certificates \
    curl \
    gnupg \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set up a working directory
WORKDIR /workspace

# Copy your action files to the Docker image
COPY dist/ ./dist/

# Set the entrypoint to your action script
ENTRYPOINT ["node", "dist/index.js"]
