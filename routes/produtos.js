const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rotas dos produtos
router.get('/', produtoController.index);                    // GET /produtos - Listar todos
router.get('/novo', produtoController.create);               // GET /produtos/novo - Formulário de criação
router.post('/', produtoController.store);                   // POST /produtos - Criar produto
router.get('/:id', produtoController.show);                  // GET /produtos/:id - Exibir produto
router.get('/:id/editar', produtoController.edit);           // GET /produtos/:id/editar - Formulário de edição
router.put('/:id', produtoController.update);                // PUT /produtos/:id - Atualizar produto
router.delete('/:id', produtoController.destroy);            // DELETE /produtos/:id - Excluir produto

module.exports = router;

