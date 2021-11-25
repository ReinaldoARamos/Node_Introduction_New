const express = require('express'); //Iniciando o framework Express, já que o mesmo já puxa HTTP
let app =  express(); //Essa variável retornar toda a aplicação e o conjunto de informaçõesn rodando intermnamente

app.get('/' /*Antes das requisição e resposta passamos o parâmetro, que é a rota*/
,(req, res) => { 
    res.statusCode = 200; //Código de quando o usuário acessa cm sucesso o servidor
            res.setHeader('Content-Type', 'text/HTMl')//Retorna um header em HTML
            res.end("<h1> ai...</h1>")
    });
    
    app.get('/users' /*Antes das requisição e resposta passamos o parâmetro, que é a rota*/
,(req, res) => { 
  
    res.statusCode = 200; //Código de quando o usuário acessa cm sucesso o servidor
    res.setHeader('Content-Type', 'application/json')//especifíca o tipo de conteúdo, nesse caso JSON
    res.json({ //Criação do JSON
        users: [{
            name: "Reinaldo",
            email: "gamersolitavi4l@gmai.com",
            id: 1
        }]
    })
    });
    //Foi removido o create server e substituído diretamente pelo metodo que vamos 
    //utilizar pela rota, nesse caso o GET

  

    

app.listen(3000, '127.0.0.1', () => {  //Inserimos a porta e o nosso IP local e uma função anonima
    console.log("servidor rodando") //Um console log para teste

})