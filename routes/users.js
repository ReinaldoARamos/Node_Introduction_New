


module.exports = (app)=>{
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
  
  app.get('/user/admin' ,  (req, res) => {
    res.statusCode = 200; //Código de quando o usuário acessa cm sucesso o servidor
      res.setHeader("Content-Type", "application/json"); //especifíca o tipo de conteúdo, nesse caso JSON
      res.json({
        //Criação do JSON
  
        users: [
          
        ],
      });
    }
  
    
    
  );
      
  

}
//Foi removido o create server e substituído diretamente pelo metodo que vamos
//utilizar pela rota, nesse caso o GET
