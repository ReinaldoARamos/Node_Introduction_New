module.exports = {
  user: (app, req, res) => {
    let { body, validationResult, check } = require("express-validator");

    body("NAME", "nome inválido").isEmpty();
    //aqui eu inseri o body para ele pegar os campos dentro do body dos users
    //Passei como parãmetro  o nome dos campos, nesse caso passei o NAME
    //Junto com a função isEmpty(), ou seja, ele vai validar o campo
    //E se estiver vazio ele retorna erro
    body("email", "email invalido").isEmpty().isEmail();
    //req.assert('email', 'email inválido').isEmail().notEmpty();

    let errors = validationResult(req);
    //Criei um let para guardar o require com o resultado da validação dos campos

    if (errors) {
      //Caso haja algum erro ele retorna error e imprime na tela o erro em formato de JSON e
      //retorna status 400
      //res.status(400).json(errors);
      app.utils.error.send(errors, req, res);
      return false; //Parar a função
    }else{
        return true
    }
  },
};
