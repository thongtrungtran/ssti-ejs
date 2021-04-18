//Same for all javascritp template tengines
const express = require('express');
const lodash = require('lodash');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Dependent of Templating engine
var ejs = require('ejs');
const port = 8082

app.set("views","./");
app.set("view engine","ejs");


app.post('/', (req, res) => {
    let data = {};
    let input = JSON.parse(req.body.data);
    lodash.defaultsDeep(data, input);
    res.json({message: "OK"});
})


app.get('/', (request, response) => {
    response.render("index");
  })

app.listen(port, (err) => {
if (err) {
    
    return console.log('something bad happened', err)
}

console.log(`server is listening on ${port}`)
})

