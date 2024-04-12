const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))


app.get('/pruebaGet', (req, res) => {
    res.send('hola');
})
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})