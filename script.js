var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/cookieset', function(req, res){
    res.cookie('cookie_name', 'cookie_value');
    res.cookie('company', 'jCoders');
    res.cookie('name', 'Aulona');

    res.status(200).send(' Gjithcka ka shkuar ne rregull!  ');
});

app.get('/cookieget', function(req, res){
    res.send(req.cookies);
});

app.get('/', function(req, res){
    const username = req.cookies.name || 'i panjohur'; 
    const Kompani = req.cookies.company || 'kompani';
    res.send(`Welcome to ${Kompani}, ${username}`);

});

const server = app.listen(8001, () =>  {
    const host = 'localhost';
    const port = server.address().port;
    console.log(`Server is running at http://${host}:${port}`);
}); 