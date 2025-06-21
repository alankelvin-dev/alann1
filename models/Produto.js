const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'O nome do produto é obrigatório'
            },
            len: {
                args: [2, 100],
                msg: 'O nome deve ter entre 2 e 100 caracteres'
            }
        }
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: {
                msg: 'O preço deve ser um valor decimal válido'
            },
            min: {
                args: [0],
                msg: 'O preço deve ser maior que zero'
            }
        }
    },
    categoria: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'A categoria é obrigatória'
            }
        }
    },
    quantidadeEstoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            isInt: {
                msg: 'A quantidade deve ser um número inteiro'
            },
            min: {
                args: [0],
                msg: 'A quantidade não pode ser negativa'
            }
        }
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'produtos',
    timestamps: true
});

// Métodos de instância
Produto.prototype.getPrecoFormatado = function() {
    return `R$ ${this.preco.toFixed(2).replace('.', ',')}`;
};

// Métodos estáticos
Produto.findByCategoria = function(categoria) {
    return this.findAll({
        where: { categoria },
        order: [['nome', 'ASC']]
    });
};

Produto.findAtivos = function() {
    return this.findAll({
        where: { ativo: true },
        order: [['nome', 'ASC']]
    });
};

module.exports = Produto;

