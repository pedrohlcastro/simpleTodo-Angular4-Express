'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const dbPort = 27017;
const dbName = 'todo-kube';
let itemSchema, Item;

mongoose.connect(`mongodb://localhost:${dbPort}/${dbName}`)
    .then(() => {
        console.log('[SERVER] MongoDb connected');
        itemSchema = new mongoose.Schema({
            text: {
                type: String,
                reqired: true
            }
        });
        Item = mongoose.model('Item', itemSchema);
    }, (err) => {
        console.error('\x1b[31m', '[SERVER] MongoDb failed to connect')
    });

app.use(morgan('dev'));
app.use(cors());
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname,'dist')));

app.get('/test', (req, res) => {
    Item.find({}).exec()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json({status: 'Error DB query: ' + err }));
});

app.post('/test', (req, res) => {
    const text = req.body.text;
    const newItem = new Item({text: text});
    newItem.save()
        .then(() => res.json({result: 'Success'}))
        .catch((err) => res.status(500).json({status: 'Error DB query: ' + err}));
});

app.delete('/test/:id', (req,res) =>{
    Item.findByIdAndRemove(req.params.id).exec()
        .then((data) => res.json({status: 'Success'}))
        .catch((err => res.status(500).json({status: 'Error DB query: ' + err })));
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
});


app.listen(8000, (err) => {
    if(err) throw err;
    else console.log('Running localhost:8000');
});
