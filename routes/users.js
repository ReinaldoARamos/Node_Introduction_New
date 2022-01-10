let neDB = require("nedb"); //require do banco de dados em javaScript

let db = new neDB({
  //Criação de um let que vai guardar o objeto criado no banco de dados
  filename: "users.db",
  //Nome do arquivo
  autoload: true,
  //Toda vez que iniciarmos ele carrega o banco automaticamente com esse auto load
});

module.exports = (app) => {
  //Exportamos o módulo app e todas as suas dependências
  let route = app.route("/user");
  //Criamos a route para passar a rota user
  route.get((req, res) => {
    //Aqui usamos o método get da rota, ou seja, caso a rota receba o método get ela executa
    //tudo denmtro desse método aqui
    //
    db.find({})
      //db.find é o metodo para buscar os usuários dentro do banco de dados
      .sort({ NAME: 1 })
      //Sort vai ordenas os users por ordem albabética e crescente
      .exec((err, users) => {
        //exec vai executar os parametros do insert passado no post
        if (err) {
          app.utils.error.send(err, req, res); //carrega o modulo utils e chama o método send e seus parametros
          //Esse app.utils basicamente vai usar o método send criado dentro da pasta error
          //e retornar o erro
        } else {
          res.statusCode = 200; //Código de quando o usuário acessa cm sucesso o servidor
          //Ele retorna um status code de 200, ou seja, quando da certo
          res.setHeader("Content-Type", "application/json"); //especifíca o tipo de conteúdo, nesse caso JSON
          //Ele tambpem retorna um objeto JSON dentro do res
          res.json({
            //Criação do JSON
            //Pegamos esse JSON users que é criado e retornamos ele
            users: users,
            //atributos do body do json definido dentro do Postman
          });
        }
      });
  });

  route.post((req, res) => {
    //Colocamos o post para inserir users dentro do DB
    //foi apagado o get e trocado pelo post
    // para que possamos simular um no Psotman

    db.insert(req.body, (err, users) => {
      //Insert e o comando usado para inserir arquivos dentro do DB
      //Aqui ele faz o require do body e a arrow function anonima recebe o JSON users s o errro
      //Como parametro
      if (err) {
        //Se der erro ele retorna erro
        app.utils.error.send(err, req, res);
      } else {
        //Se der certo ele inseri o user criado dentro do db graças ao comando insert
        res.status(200).json(users);
        //aqui ele recebe o codigo 200(sucesso) e inseri o json do user
      }
    });
    //Aqui dentro usamos o método insertb para inserir dados no banco
    //nele colocamos o objto json que estamos retornando e uma função, como a erro por exemplo,
    //caso o método retorne erro, como o de cadastro ja existente
    //e claro, colocamos também os dados do usuário
  });

  let routeId = app.route("/user/:id");
  //Criei uma roto que vai receber os ids dos users

  routeId.get((req, res) => {
    //Estabeleci o método get, coloquei a requisisão e a resposta
    db.findOne({ _id: req.params.id }).exec((err, user) => {
      //aqui ele usa o método findOne para buscar o parametro selecionado
      //no caso os ids
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(user); //aqui ele recebe o codigo 200(sucesso) e inseri o json do user
      }
    });
  });


  routeId.put((req, res) => {
    //Estabeleci o método get, coloquei a requisisão e a resposta
    db.update({ _id: req.params.id }, req.body, err /*Função de callback*/ => {
     //Esse método é o update, ele acessa os dados que recebe do req.body e atualiza
     //No Id selecionado, graças ao metodo update do neDB
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(Object.assign(req.body, req.params)); //aqui ele recebe o codigo 200(sucesso) e inseri o json do user
        
      }
    });
  });

  routeId.delete((req, res) => {
    //Estabeleci o método delete, coloquei a requisisão e a resposta
    db.remove({ _id: req.params.id }, {}, err /*Função de callback*/ => {
     //Esse método é o update, ele acessa os dados que recebe do req.body e atualiza
     //No Id selecionado, graças ao metodo update do neDB
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(req.params); //aqui ele recebe o codigo 200(sucesso) 
        //e mostra na tela o objeto removido
        
      }
    });
  });


};
//Foi removido o create server e substituído diretamente pelo metodo que vamos
//utilizar pela rota, nesse caso o GET
