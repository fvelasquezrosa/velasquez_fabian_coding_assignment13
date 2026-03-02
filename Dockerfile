# ---------- Build stage ----------
FROM node:20-alpine AS build

# Working directory requirement
WORKDIR /velasquez_fabian_ui_garden

# Install deps
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build


# ---------- Production stage ----------
FROM nginx:alpine

# Working directory requirement
WORKDIR /velasquez_fabian_ui_garden

# Copy build output to nginx html folder
COPY --from=build /velasquez_fabian_ui_garden/build /usr/share/nginx/html

# Nginx listens on 80 inside container; we will map host 8083 -> container 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]