const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const SECREAT_KEY = 'vij';

function authenticationMiddleware(req,res,next) {
    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({error: 'Unauthorized'});
    }


    try {
        const decoded = jwt.verify(token.split(' ')[1], SECREAT_KEY);
        req.user = decoded;
        next();
    } catch(error) {
        return res.status(401).json({error:'Unauthorized'});
    }
}

app.get('/protected-route', authenticationMiddleware,(req,res) => {
    res.json({message:'Access granted! You are authenticated.',user:req.user}); 
});


app.get('/', (req, res) => {
    res.send('Day 11');
});


app.listen(3000, () => {
    console.log("Server is running on 3000 port");
});


