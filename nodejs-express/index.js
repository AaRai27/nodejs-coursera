const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(bodyParser.json());

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');
app.use('/dishes', dishRouter); //akan menampilkan [ http://localhost:3000/dish ] atau  [ http://localhost:3000/dish/12 ] jika dengan ID
app.use('/promotions', promoRouter); //akan menampilkan [ http://localhost:3000/promotions ] atau  [ http://localhost:3000/promotions/12 ] jika dengan ID
app.use('/leaders', leaderRouter); //akan menampilkan [ http://localhost:3000/leaders ] atau  [ http://localhost:3000/leaders/12 ] jika dengan ID



app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1> Hello, Welcome to Express </h1></body></html>');
})

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`The server running at http://${hostname}:${port}`)
});