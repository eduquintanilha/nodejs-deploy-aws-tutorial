const express = require('express');

const app = express();


app.get('/', (req, res) => res.status(200).json('API is running!  :)'))


app.listen(3000);
