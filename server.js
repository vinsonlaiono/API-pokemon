const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/dist/public'));

app.get('/https://pokeapi.co/api/v2/pokemon/1/', function (req, res) {

    console.log(req)

    res.json({})
})

app.listen(port, function () {
    console.log("You are listening on port 5000")
})