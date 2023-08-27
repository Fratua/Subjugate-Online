```Dockerfile
# Use official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source inside the docker image
COPY . .

# Expose port 8080 for the app to be accessible
EXPOSE 8080

# Define the command to run the app
CMD [ "node", "server/server.js" ]
```