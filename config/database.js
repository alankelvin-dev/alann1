const { Sequelize } = require('sequelize');
const path = require('path');

// Configuração do banco de dados SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '..', 'database.sqlite'),
    logging: console.log, // Para debug - pode ser removido em produção
    define: {
        timestamps: true, // Adiciona createdAt e updatedAt automaticamente
        underscored: false, // Usa camelCase ao invés de snake_case
    }
});

// Teste de conexão
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
    }
}

module.exports = {
    sequelize,
    testConnection
};

