# Step 1: Usar uma imagem leve de um servidor web (Nginx)
FROM nginx:alpine

# Step 2: Copiar os arquivos do seu projeto para dentro do servidor
# O Nginx procura arquivos em /usr/share/nginx/html por padrão
COPY . /usr/share/nginx/html

# Step 3: Informar que o container usará a porta 80
EXPOSE 80