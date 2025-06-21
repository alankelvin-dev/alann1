const Produto = require('../models/Produto');

const produtoController = {
    // Listar todos os produtos
    async index(req, res) {
        try {
            const produtos = await Produto.findAll({
                order: [['nome', 'ASC']]
            });
            res.render('produtos/index', { 
                title: 'Lista de Produtos',
                produtos
            });
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            req.flash('error', 'Erro ao carregar a lista de produtos');
            res.redirect('/');
        }
    },

    // Exibir formulário de criação
    async create(req, res) {
        res.render('produtos/form', { 
            title: 'Novo Produto',
            produto: {},
            action: '/produtos',
            method: 'POST'
        });
    },

    // Salvar novo produto
    async store(req, res) {
        try {
            const { nome, descricao, preco, categoria, quantidadeEstoque } = req.body;
            
            await Produto.create({
                nome,
                descricao,
                preco: parseFloat(preco),
                categoria,
                quantidadeEstoque: parseInt(quantidadeEstoque) || 0
            });

            req.flash('success', 'Produto criado com sucesso!');
            res.redirect('/produtos');
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            req.flash('error', 'Erro ao criar produto: ' + error.message);
            res.redirect('/produtos/novo');
        }
    },

    // Exibir detalhes de um produto
    async show(req, res) {
        try {
            const produto = await Produto.findByPk(req.params.id);
            
            if (!produto) {
                req.flash('error', 'Produto não encontrado');
                return res.redirect('/produtos');
            }

            res.render('produtos/show', { 
                title: `Produto: ${produto.nome}`,
                produto
            });
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            req.flash('error', 'Erro ao carregar produto');
            res.redirect('/produtos');
        }
    },

    // Exibir formulário de edição
    async edit(req, res) {
        try {
            const produto = await Produto.findByPk(req.params.id);
            
            if (!produto) {
                req.flash('error', 'Produto não encontrado');
                return res.redirect('/produtos');
            }

            res.render('produtos/form', { 
                title: `Editar: ${produto.nome}`,
                produto,
                action: `/produtos/${produto.id}?_method=PUT`,
                method: 'POST'
            });
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            req.flash('error', 'Erro ao carregar produto para edição');
            res.redirect('/produtos');
        }
    },

    // Atualizar produto
    async update(req, res) {
        try {
            const { nome, descricao, preco, categoria, quantidadeEstoque } = req.body;
            const produto = await Produto.findByPk(req.params.id);
            
            if (!produto) {
                req.flash('error', 'Produto não encontrado');
                return res.redirect('/produtos');
            }

            await produto.update({
                nome,
                descricao,
                preco: parseFloat(preco),
                categoria,
                quantidadeEstoque: parseInt(quantidadeEstoque) || 0
            });

            req.flash('success', 'Produto atualizado com sucesso!');
            res.redirect('/produtos');
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            req.flash('error', 'Erro ao atualizar produto: ' + error.message);
            res.redirect(`/produtos/${req.params.id}/editar`);
        }
    },

    // Excluir produto
    async destroy(req, res) {
        try {
            const produto = await Produto.findByPk(req.params.id);
            
            if (!produto) {
                req.flash('error', 'Produto não encontrado');
                return res.redirect('/produtos');
            }

            await produto.destroy();
            req.flash('success', 'Produto excluído com sucesso!');
            res.redirect('/produtos');
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
            req.flash('error', 'Erro ao excluir produto');
            res.redirect('/produtos');
        }
    }
};

module.exports = produtoController;

