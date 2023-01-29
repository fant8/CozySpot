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
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

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
  let scopes = ['user-read-private', 'user-read-email'];
  let state = generateRandomString(16);
  let authURL = spotifyApi.createAuthorizeURL(scopes, state);
  res.redirect(authURL);
});

app.get('/login_successful', function(req, res) {
  let code = req.body.code;
  spotifyApi.authorizationCodeGrant(code)
  .then(data => {
    res.send(data)
  })
  .catch(err => res.send(err));
  })


