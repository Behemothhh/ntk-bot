const express = require('express');
const app = express();
const path = require('path');

app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

app.use('/baza', express.static(path.join(__dirname, 'pages')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.listen(process.env.PORT || 5000);