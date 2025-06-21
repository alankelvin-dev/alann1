const { sequelize } = require('../config/database');
const Produto = require('./Produto');

// Aqui você pode adicionar outros modelos conforme necessário
const models = {
    Produto,
    sequelize
};

// Configurar associações entre modelos (se houver)
// Exemplo: Produto.belongsTo(Categoria);

module.exports = models;

