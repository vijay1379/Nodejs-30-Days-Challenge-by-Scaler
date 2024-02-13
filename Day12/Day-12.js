const express =require('express');
const app= express();
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowsMs: 15 * 60 * 1000,
    max:2,
    message: 'Too many requests'
});

app.use(limiter);

app.get('/',(req,res) => {
    res.send("Day 12 Completed");
});

app.listen(3000, () => {
    console.log("Server is running on 3000 port");
});

