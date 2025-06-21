const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('express-flash');
const path = require('path');

// Importar configuração do banco de dados
const { sequelize } = require('./config/database');

// Importar rotas
const indexRoutes = require('./routes/index');
const produtoRoutes = require('./routes/produtos');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Configuração de sessão
app.use(session({
    secret: 'produtos-app-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(flash());

// Middleware para disponibilizar mensagens flash nas views
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

// Rotas
app.use('/', indexRoutes);
app.use('/produtos', produtoRoutes);

// Middleware de tratamento de erro 404
app.use((req, res) => {
    res.status(404).render('404', { 
        title: 'Página não encontrada',
        message: 'A página que você está procurando não foi encontrada.'
    });
});

// Sincronizar banco de dados e iniciar servidor
async function startServer() {
    try {
        await sequelize.sync();
        console.log('Banco de dados sincronizado com sucesso!');
        
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Servidor rodando na porta ${PORT}`);
            console.log(`Acesse: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao inicializar o servidor:', error);
    }
}

startServer();

module.exports = app;

