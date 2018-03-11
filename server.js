var express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const firebase = require("firebase");
const app = express();

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
  res.json({ message: 'Working' })
})

app.post('/api/posts/create', (req, res) => {
  console.log(req.body);
  res.json('Works');
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
