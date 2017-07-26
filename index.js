'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(morgan('dev'));
app.use(cors());
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname,'dist')));

let todoItens = [];

app.get('/test', (req, res) => {
    res.json(todoItens);
});

app.post('/test/:todo', (req, res) => {
    todoItens.unshift(req.params.todo);
    res.json({
        status: 'Sucesso'
    });
});

app.delete('/test/:id', (req,res) =>{
    let removeId = parseInt(req.params.id);
    if(todoItens.length > removeId){
        todoItens.splice(removeId,1);
        res.json({
            status: 'Arquivo removido com sucesso'
        });
    }
    res.json({
        status: 'Não foi possivel remover item'
    });
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
});


app.listen(8000, (err) => {
    if(err) throw err;
    else console.log('Running localhost:8000');
});