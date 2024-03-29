const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.sendFile('index.html', {root: path.join(__dirname)});
})

app.listen(3000, function(){
    console.log('Listening on port 3000');
})