# Elegir una imagen base
FROM node:alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar el archivo 'package.json' y 'package-lock.json' (si está disponible)
COPY package*.json ./

# Instalar dependencias del proyecto
RUN npm install

# Copiar los archivos del proyecto al directorio de trabajo del contenedor
COPY . .

# Exponer el puerto que utiliza tu aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
