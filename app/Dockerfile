# Choose a base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy 'package.json' and 'package-lock.json' files (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files to the container's working directory
COPY . .

# Expose the port used by your application
EXPOSE 8080

# Command to run the application
CMD ["node", "app.js"]
