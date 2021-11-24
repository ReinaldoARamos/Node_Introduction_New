const http = require('http');


let server = http.createServer((req, res) => { //criamos a variável server 

    console.log('URL', req.url) //Essa variável vai receber as solicitações do servidor, aqui é a URL
    console.log('METHOD', req.method) //Aqui é o método do servidor


    switch (req.url) {
        case '/':
            res.statusCode = 200; //Código de quando o usuário acessa cm sucesso o servidor
            res.setHeader('Content-Type', 'text/HTMl')//Retorna um header em HTML
            res.end("<h1> ai...</h1>")
            break;

        case '/test': //URl que o Req vai receber 


            res.statusCode = 200; //Código de quando o usuário acessa cm sucesso o servidor
            res.setHeader('Content-Type', 'application/json')//especifíca o tipo de conteúdo, nesse caso JSON
            res.end(JSON.stringify({ //Criação do JSON
                users: [{
                    name: "Reinaldo",
                    email: "gamersolitavi4l@gmai.com",
                    id: 1
                }]
            }))

            break;

    }
});

server.listen(3000, '127.0.0.1', () => {  //Inserimos a porta e o nosso IP local e uma função anonima
    console.log("servidor rodando") //Um console log para teste

})