let neDB = require("nedb"); //require do banco de dados em javaScript

let db = new neDB({
  filename: "users.db",
  autoload: true,
});

module.exports = (app) => {
  let route = app.route("/user");
  route.get((req, res) => {
    db.find({})
      .sort({ NAME: 1 })
      .exec((err, users) => {
        //exec vai executar os parametros do insert passado no post
        if (err) {
          app.utils.error.send(err, req, res); //carrega o modulo utils e chama o método send e seus parametros
        } else {
          res.statusCode = 200; //Código de quando o usuário acessa cm sucesso o servidor
          res.setHeader("Content-Type", "application/json"); //especifíca o tipo de conteúdo, nesse caso JSON
          res.json({
            //Criação do JSON

            users: users, //json definido dentro do Postman
          });
        }
      });
  });

  route.post((req, res) => {
    //foi apagado o get e trocado pelo post
    // para que possamos simular um no Psotman

    db.insert(req.body, (err, users) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(users); //aqui ele recebe o codigo 200(sucesso) e inseri o json do user
     

        
      }
    });
    //Aqui dentro usamos o método insertb para inserir dados no banco
    //nele colocamos o objto json que estamos retornando e uma função, como a erro por exemplo,
    //caso o método retorne erro, como o de cadastro ja existente
    //e claro, colocamos também os dados do usuário
  });

  let routeId = app.route("/user/:id"); //Criei uma roto que vai receber os ids dos users

  routeId.get((req, res) => {
    //Estabeleci o método get, coloquei a requisisão e a resposta
    db.findOne({ _id: req.params.id }).exec((err, user) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(user); //aqui ele recebe o codigo 200(sucesso) e inseri o json do user
      }
    });
    //aqui ele usa o método findOne para buscar o parametro selecionado
    //no caso os ids
  });
};
//Foi removido o create server e substituído diretamente pelo metodo que vamos
//utilizar pela rota, nesse caso o GET
