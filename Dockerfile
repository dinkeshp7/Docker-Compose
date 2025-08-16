# Use Node LTS
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy code
COPY . .

# Build TypeScript
RUN npm run build

# Expose API port
EXPOSE 3000

# Start server
CMD ["npm", "start"]