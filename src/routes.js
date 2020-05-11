const routes = require('express').Router();
const SessionController = require('./app/controllers/SessionController');
const authMiddleware = require('./app/middleware/auth');

routes.post('/sessions', SessionController.store)


// A partir desta linha todas as rotas só podem ser acessadas com token de autenticação

routes.use(authMiddleware);

routes.get('/dashboard', (req, res) => {
  return res.status(200).send();
})

module.exports = routes;