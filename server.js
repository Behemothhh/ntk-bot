const express = require('express');
const app = express();
const path = require('path');

app.get('/script', (req, res) => {
    res.sendFile(path.join(__dirname, 'MEGAscript.js'));
});

app.get('/baza', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/hello', (req, res) => {
    res.end('const s=document.createElement("script");s.src="https://ntknet.herokuapp.com/script";document.head.append(s);');
});

app.listen(process.env.PORT || 5000);