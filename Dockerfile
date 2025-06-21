# Use a imagem oficial do Node.js como base
FROM node:20-alpine

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar package.json e package-lock.json (se existir)
COPY package*.json ./

# Instalar as dependências
RUN npm ci --only=production

# Copiar o código da aplicação
COPY . .

# Criar diretório para o banco de dados SQLite
RUN mkdir -p /app/data

# Expor a porta que a aplicação usa
EXPOSE 3000

# Definir variáveis de ambiente
ENV NODE_ENV=production
ENV PORT=3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]

