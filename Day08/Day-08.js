const express = require('express');
const app = express();


function positiveIntegerHandler(req, res){
    const number = parseInt(req.query.number); 
    if (Number.isInteger(number) && number > 0) {
        res.status(200).send('Success: Positive integer received.');
    } else {
        throw new Error('Invalid number: must be a positive integer.');
    }
}

function errorHandler(err, req, res, next) {
    if (err.message === 'Invalid number: must be a positive integer.') {
        res.status(400).send('Error: Invalid number. Please provide a positive integer.');
    } else {
        next(err);
    }
}

app.get('/positive', positiveIntegerHandler);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`);
});