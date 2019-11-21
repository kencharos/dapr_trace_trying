// ------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// ------------------------------------------------------------

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const port = 3001;

app.post('/apply', (req, res) => {
    console.log(req.headers)
    res.send({message:"hello! " + req.body.name})
});


app.listen(port, () => console.log(`Node App service2 listening on port ${port}!`));