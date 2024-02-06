const express = require('express');
const app = express();

app.get('/greet', function(req, res) {
    const name  = req.query.name;

    if (name) {
        res.send(`Hello, ${name}!`);
    } else {
        res.send('Hello, Guest!');
    }
});


app.listen(3000, function() {
    console.log('App is listening on port 3000');
});