const express = require("express"); //Iniciando o framework Express, já que o mesmo já puxa HTTP
const consign = require("consign");
let bodyParser = require("body-parser")
let app = express(); //Essa variável retornar toda a aplicação e o conjunto de informaçõesn rodando intermnamente
//Esse let faz com que o routeSIndex procure um arquivo index dentro de node_modules
//porém temos que definir qual arquivo ele vai buscar, pois não necessáriamente é o
//módulo index e sim um da pasta, por isso colocamos o diretório


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
consign().include("routes").into(app);

app.listen(3000, "127.0.0.1", () => {
  //Inserimos a porta e o nosso IP local e uma função anonima
  console.log("servidor rodando"); //Um console log para teste
});
