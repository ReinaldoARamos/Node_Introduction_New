
module.exports = (app) => {

  app.get(
    "/" /*Antes das requisição e resposta passamos o parâmetro, que é a rota*/,
    (req, res) => {
      res.statusCode = 200; //Código de quando o usuário acessa cm sucesso o servidor
      res.setHeader("Content-Type", "text/HTMl"); //Retorna um header em HTML
      res.end("<h1> ai....</h1>");
      //Aqui caso a rota sesa / ele vai criar um Header HTML e enviiar como resposta do req
    }

  )
    ;
};
//exportamos isso para que ele exporte o routes para quem tiver chamando
//ou requerindo o index.js como um módulo

