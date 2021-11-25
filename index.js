const express = require("express"); //Iniciando o framework Express, já que o mesmo já puxa HTTP
let app = express(); //Essa variável retornar toda a aplicação e o conjunto de informaçõesn rodando intermnamente

app.listen(3000, "127.0.0.1", () => {
  //Inserimos a porta e o nosso IP local e uma função anonima
  console.log("servidor rodando"); //Um console log para teste
});
