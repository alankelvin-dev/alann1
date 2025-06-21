# Sistema de Gerenciamento de Produtos


## Tecnologias Utilizadas
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web para Node.js
- **EJS** - Template engine para renderização de views
- **Sequelize** - ORM para banco de dados
- **SQLite** - Banco de dados relacional
- **Bootstrap 5** - Framework CSS para interface responsiva
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Baskerville e Inter)


## Modelo de Dados

### Produto
- **id**: Chave primária (auto-incremento)
- **nome**: Nome do produto (obrigatório, 2-100 caracteres)
- **descricao**: Descrição detalhada (opcional)
- **preco**: Preço do produto (obrigatório, decimal)
- **categoria**: Categoria do produto (obrigatório)
- **quantidadeEstoque**: Quantidade em estoque (obrigatório, inteiro)
- **ativo**: Status do produto (boolean, padrão: true)
- **createdAt**: Data de criação (automático)
- **updatedAt**: Data de atualização (automático)



## Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o servidor**:
   ```bash
   npm start
   ```

3. **Acessar a aplicação**:
   - URL: http://localhost:3000
   - O banco de dados SQLite será criado automaticamente


## Conclusão
Esta aplicação demonstra uma implementação completa e profissional de um sistema CRUD utilizando as melhores práticas de desenvolvimento web com Node.js, Express, EJS e Sequelize.
