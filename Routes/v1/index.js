const routes = require('express').Router();
const Methods = require('../../Resolvers/imports');

routes.post('/', (req, res) => {

  const user = Methods.Questions.fetchQuestions(req.body)
  res.status(200).json({ message: user });
});


module.exports = routes;
