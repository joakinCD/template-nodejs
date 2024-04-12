const express = require('express');
import * as db from "./db/index.js";
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.get("/login", async (req, res) => {
  var email = req.body.email
  var pass = req.body.pass
  const result = await db.query('SELECT * FROM usuarios WHERE email="'+email+'" AND pass="'+pass+'"');
  res.send(result.rows);
});
app.get('/pruebaGet', (req, res) => {
    res.send('hola');
})
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})