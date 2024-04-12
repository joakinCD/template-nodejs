const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.get('/login', (req, res) => {
  var email = req.body.email
  var pass = req.body.pass
  console.log(email,pass)
  var query = connection.query('SELECT * FROM usuarios WHERE email="'+email+'" AND pass="'+pass+'"', function(error, result){
       if(error){
          throw error;
       }else{
          res.status(200).json({ datos : result[0]})
       }
  });
})
app.get('/pruebaGet', (req, res) => {
    res.send('hola');
})
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})