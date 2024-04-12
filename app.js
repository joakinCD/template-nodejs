import express from "express";
import * as db from "./db/index.js";
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.get("/login", async (req, res) => {
    console.log(req.query)
  var email = req.query.email
  var pass = req.query.pass
  if(pass && email){
      const result = await db.query('SELECT * FROM usuarios WHERE email = $1 AND pass = $2', [email, pass], (err, result) => {
        if(err) {
            res.status(404).send([])
        }
        res.send(result.rows);
    });
    
  }
  
});
const updateOne = (cardDetails, callback) => {
    client.query('UPDATE cards SET color = $1, status = $2 WHERE id = $3', [cardDetails.color, cardDetails.status, cardDetails.id], (err, res) => {
        if(err) {
            return callback(err);
        }
        callback(null, res);
    });
}
app.get('/pruebaGet', (req, res) => {
    res.send('hola');
})
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})