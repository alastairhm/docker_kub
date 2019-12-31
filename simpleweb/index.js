const express = require('express');

const app = express();

app.get('/',(req, res) => {
    var currtime = Date.now();
    res.send('<H1>Hi There</H1>'+currtime);
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});