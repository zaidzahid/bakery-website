# Use official Nginx image as base
FROM nginx:alpine

# Set working directory inside container
WORKDIR /usr/share/nginx/html

# Remove default Nginx content
RUN rm -rf ./*

# Copy all website files into container
COPY . .

# Expose port 80 for the web
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
