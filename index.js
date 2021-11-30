const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello there people!');
});

app.listen(3000, () => {
    console.log('Listening');
});
