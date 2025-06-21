# Sistema de Gerenciamento de Produtos

## Descrição
Aplicação web completa desenvolvida com Express.js, EJS e Sequelize, implementando todas as funcionalidades CRUD (Create, Read, Update, Delete) para gerenciamento de produtos.

## Tecnologias Utilizadas
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web para Node.js
- **EJS** - Template engine para renderização de views
- **Sequelize** - ORM para banco de dados
- **SQLite** - Banco de dados relacional
- **Bootstrap 5** - Framework CSS para interface responsiva
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Baskerville e Inter)

## Funcionalidades Implementadas

### ✅ CRUD Completo
- **Create (Criar)**: Formulário para cadastro de novos produtos
- **Read (Ler)**: Listagem e visualização detalhada de produtos
- **Update (Atualizar)**: Edição de produtos existentes
- **Delete (Excluir)**: Exclusão de produtos com confirmação

### ✅ Interface de Usuário
- **Tela Inicial**: Dashboard com apresentação do sistema
- **Lista de Produtos**: Tabela responsiva com todas as informações
- **Formulário Unificado**: Mesmo formulário para criação e edição
- **Página de Detalhes**: Visualização completa do produto
- **Página Sobre**: Informações sobre o sistema

### ✅ Recursos Avançados
- **Partials EJS**: Componentes reutilizáveis (navbar, footer, flash messages)
- **Validação de Dados**: Validação tanto no frontend quanto no backend
- **Mensagens Flash**: Feedback visual para ações do usuário
- **Design Responsivo**: Interface adaptável para desktop e mobile
- **Confirmação de Exclusão**: Modal personalizado para confirmar exclusões
- **Tratamento de Erros**: Página 404 e tratamento de erros

## Estrutura do Projeto

```
produtos-app/
├── app.js                 # Arquivo principal da aplicação
├── package.json           # Dependências e scripts
├── database.sqlite        # Banco de dados SQLite
├── config/
│   └── database.js        # Configuração do Sequelize
├── models/
│   ├── index.js          # Índice dos modelos
│   └── Produto.js        # Modelo do produto
├── routes/
│   ├── index.js          # Rotas principais
│   └── produtos.js       # Rotas dos produtos
├── controllers/
│   └── produtoController.js # Controlador dos produtos
├── views/
│   ├── index.ejs         # Página inicial
│   ├── sobre.ejs         # Página sobre
│   ├── 404.ejs           # Página de erro
│   ├── partials/
│   │   ├── navbar.ejs    # Barra de navegação
│   │   ├── footer.ejs    # Rodapé
│   │   └── flash-messages.ejs # Mensagens flash
│   └── produtos/
│       ├── index.ejs     # Lista de produtos
│       ├── form.ejs      # Formulário de produto
│       └── show.ejs      # Detalhes do produto
└── public/
    ├── css/
    │   └── style.css     # Estilos personalizados
    └── js/
        └── app.js        # JavaScript da aplicação
```

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

## Rotas da Aplicação

### Rotas Principais
- `GET /` - Página inicial
- `GET /sobre` - Página sobre o sistema

### Rotas dos Produtos
- `GET /produtos` - Lista todos os produtos
- `GET /produtos/novo` - Formulário de criação
- `POST /produtos` - Criar novo produto
- `GET /produtos/:id` - Visualizar produto específico
- `GET /produtos/:id/editar` - Formulário de edição
- `PUT /produtos/:id` - Atualizar produto
- `DELETE /produtos/:id` - Excluir produto

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

## Características do Design

### Estilo Visual
- **Tema**: Vintage Elegante inspirado no The New Yorker
- **Cores**: Tons profundos com detalhes dourados
- **Tipografia**: Baskerville (títulos) e Inter (texto)
- **Layout**: Design simétrico e elegante

### Responsividade
- Interface adaptável para diferentes tamanhos de tela
- Navegação otimizada para dispositivos móveis
- Tabelas responsivas com scroll horizontal quando necessário

### Interatividade
- Animações suaves em hover
- Validação em tempo real nos formulários
- Modais personalizados para confirmações
- Mensagens flash com auto-dismiss

## Validações Implementadas

### Frontend (JavaScript)
- Validação em tempo real dos campos
- Formatação automática de valores
- Confirmações de exclusão personalizadas

### Backend (Sequelize)
- Validação de tipos de dados
- Validação de comprimento de strings
- Validação de valores numéricos
- Validação de campos obrigatórios

## Recursos de Acessibilidade
- Estrutura semântica HTML5
- Labels apropriados para formulários
- Contraste adequado de cores
- Navegação por teclado
- Mensagens de erro claras

## Segurança
- Validação de dados no servidor
- Sanitização de entradas
- Tratamento de erros adequado
- Prevenção de SQL injection (via Sequelize)

## Conclusão
Esta aplicação demonstra uma implementação completa e profissional de um sistema CRUD utilizando as melhores práticas de desenvolvimento web com Node.js, Express, EJS e Sequelize. O sistema inclui interface elegante, validações robustas, tratamento de erros e design responsivo.

