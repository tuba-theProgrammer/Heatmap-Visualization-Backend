# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which the app will run (if your app runs on port 3000)
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
