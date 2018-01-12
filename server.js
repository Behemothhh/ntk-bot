const express = require('express');
const app = express();
const path = require('path');

app.get('/script', (req, res) => {
    res.sendFile(path.join(__dirname, 'MEGAscript.js'));
});

app.get('/hello', (req, res) => {
    res.end('hello');
});

app.listen(process.env.PORT || 5000);