const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

// Constants
const PORT = 9001;
//const HOST = '0.0.0.0';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// App
/* app.get('/hello', (req, res) => {
  res.send('hello!');
}); */

app.post('/message', function(req, res) {
  const {destination, body} = req.body;
  //console.log(destination, body)
  console.log(destination, body)
  axios.post('http://messageapp:3000/message', {
    destination,
    body
  })
  .then((response)=>{
    //console.log(response)
    res.send(`${response.data}`)
  })
  .catch((e)=>{
    console.log(e)
    res.status(500).send("Server error")
  })
})

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);