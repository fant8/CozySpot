const apikeys = require("./apikeys");
const express = require("express");
const cors = require("cors");
const SpotifyWebAPI = require("spotify-web-api-node")
require("dotenv").config({ path: "./config.env" });

const app = express();

const port = process.env.PORT || 1337;

const spotifyApi = new SpotifyWebAPI({
  clientId: apikeys.CLIENT_ID,
  clientSecret: apikeys.CLIENT_SECRET,
  redirectUri: apikeys.REDIRECT_URI
});

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
const { BASE_URL } = require("./apikeys");
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

<<<<<<< HEAD

/* For spotify API */

/* Load the HTTP library */
var http = require('http');

/* Create an HTTP server to handle responses */

http
  .createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello World');
    response.end();
  })
  .listen(8888);
=======
function generateRandomString(length){
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numChars = chars.length;
  let result = "";
  for (let i = 0; i < length; i++){
    result += chars[Math.floor(Math.random()*numChars)];
  }
  return result;
}

app.get('/login', function(req, res) {
  let scopes = ['user-read-private', 'user-read-email', 'user-library-read'];
  let state = generateRandomString(16);
  let authURL = spotifyApi.createAuthorizeURL(scopes, state);
  res.redirect(authURL);
});

app.get('/login_successful', function(req, res) {
  let code = req.query.code;
  spotifyApi.authorizationCodeGrant(code)
  .then(data => {
    res.redirect(BASE_URL + ':3000' + '/home?access_token=' + data.body.access_token + '&refresh_token=' + data.body.refresh_token);
  })
  .catch(err => res.send(err));
  })


>>>>>>> fd70291da010f3774758bc88a4d21e3fcb39423f
