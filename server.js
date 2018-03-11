const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const firebase = require("firebase");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/api', function (req, res) {
  res.json({ message: 'Working' });
})

app.post('/api/posts/create', (req, res) => {

  let databaseRef = firebase.database().ref();

  let formBody = req.body;

  let post = {
    handle: formBody.handle,
    description: formBody.description,

  }

  res.json(req.body);
})


const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
