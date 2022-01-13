module.exports = {
  send: (err, req, res, code = 400) => {
    //passamos os parametros dentro do método send

    console.log(`error: ${err}`);
    res.status(code).json({
      //caso ocorra um erro ele retorna o status, no caso 400 comor esposta
      //Do require em formato de JSON
      errors: err,
    });
  },
};
