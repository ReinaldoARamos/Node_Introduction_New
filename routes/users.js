let neDB = require('nedb') //require do banco de dados em javaScript


module.exports = (app) => {
  app.get(
    "/user" /*Antes das requisição e resposta passamos o parâmetro, que é a rota*/,
    (req, res) => {
      res.statusCode = 200; //Código de quando o usuário acessa cm sucesso o servidor
      res.setHeader("Content-Type", "application/json"); //especifíca o tipo de conteúdo, nesse caso JSON
      res.json({
        //Criação do JSON

        users: [
          {
            name: "Reinaldo",
            email: "gamersolitavi4l@gmai.com",
            id: 1,
          },
        ],
      });
    }
  );

  app.post("/user", (req, res) => {
    //foi apagado o get e trocado pelo post
    // para que possamos simular um no Psotman

    res.json(req.body); //Foi removido o res pois ele entende que é um
    //JSON e entende que é um código 200(funcionou)
  });
};
//Foi removido o create server e substituído diretamente pelo metodo que vamos
//utilizar pela rota, nesse caso o GET
