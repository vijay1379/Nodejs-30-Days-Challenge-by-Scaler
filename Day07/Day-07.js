const express = require('express');
const app = express();
const port = 3000;


function requestLoggerMiddleware(req, res, next) {
    const timestamp = new Date().toISOString(); 
    const httpMethod = req.method;
    console.log(`${timestamp} - ${httpMethod} request received`);
    next(); 
}

app.use(requestLoggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});