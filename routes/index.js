const express = require('express');
const router = express.Router();

// Rota da página inicial
router.get('/', (req, res) => {
    res.render('index', { 
        title: 'Sistema de Gerenciamento de Produtos',
        message: 'Bem-vindo ao sistema de gerenciamento de produtos!'
    });
});

// Rota sobre
router.get('/sobre', (req, res) => {
    res.render('sobre', { 
        title: 'Sobre o Sistema',
        description: 'Sistema desenvolvido com Express, EJS e Sequelize'
    });
});

module.exports = router;

