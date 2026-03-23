# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /velasquez_fabian_ui_garden_build_checks

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# ---------- Production stage ----------
FROM nginx:alpine

WORKDIR /velasquez_fabian_ui_garden_build_checks

COPY --from=build /velasquez_fabian_ui_garden_build_checks/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]