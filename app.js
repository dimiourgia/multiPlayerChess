const express = require('express');


const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    res.render('index.ejs');
})

app.get('/chess', (req, res)=>{
    res.render('chess.ejs');
})

app.get('/puzzles', (req, res)=>{
    res.render('puzzles.ejs');
})

app.listen(3000);
