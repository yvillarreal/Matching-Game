# Usa una imagen base con Node.js
FROM node:latest as builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiando el archivo package.json y el archivo package-lock.json si existen
COPY package*.json ./

# Instalando las dependencias
RUN npm install

# Copiadno el resto de los archivos de la aplicación
COPY . .

# Construyendo la aplicación React
RUN npm run build

# Etapa final de construcción de la imagen
FROM nginx:latest

# Copiando los archivos de la aplicación construida desde la etapa anterior al directorio de trabajo de Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Exponiendo el puerto 80 para que la aplicación sea accesible desde fuera del contenedor
EXPOSE 80

# Comando de inicio de Nginx
CMD ["nginx", "-g", "daemon off;"]
