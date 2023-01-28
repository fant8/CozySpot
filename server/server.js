const express = require("express");
const app = express();
const cors = require("cors");
const querystring = require('node:querystring');
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 1337;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
const client_id = 'id here';
const redirect_uri = 'http://34.130.173.157:3000';
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

app.get('/loginsuccess', function(req, res) {
  let code = req.body.code;
});