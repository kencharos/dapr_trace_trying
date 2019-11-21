// ------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// ------------------------------------------------------------

const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch")
const app = express();
app.use(bodyParser.json());

const port = 3000;
const service2URL = "http://localhost:3500/v1.0/invoke/service2/method/apply"

app.get('/hello', (req, res) => {
    console.log(req.headers)
    fetch(service2URL, {
        method: "POST",
        body: JSON.stringify({name:"service1"}),
        headers: {
            "content-type":"application/json"
            // x-correlation-id propagation need for tracing continuation
            , "x-correlation-id" : req.headers["x-correlation-id"]
            }
    }).then(r => r.json())
      .then(data => res.send(data))
});


app.listen(port, () => console.log(`Node App service1 listening on port ${port}!`));