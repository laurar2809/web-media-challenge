//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password and username are "user1"

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userIsAuthorised =false;

app.use(bodyParser.urlencoded({ extended: true }));

function userCheck(req, res, next) {
  const password = req.body["password"];
  if (req.body.password === "user1" && req.body.benutzer === "user1") {
    userIsAuthorised = true;
  }
  next();
}

app.use(userCheck);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/medienwoche.html");
  } else {
    res.sendFile(__dirname + "/public/login.html");
    //Alternatively res.redirect("/");
  }
});

//Du befindest dich gerade auf "medienwoche.html"
app.post("/foto", (req, res) => {
  
    res.sendFile(__dirname + "/public/foto.html");
  
});

//Du befindest dich gerade auf "foto.html"
app.post("/fotochallenge", (req, res) => {
  
    res.sendFile(__dirname + "/public/fotochallenge.html");
  
});


//Du befindest dich gerade auf "fotochallenge.html"
app.post("/fotochallenges/challenges", (req, res) => {
  
    if(req.body.gruppe === "user1"){
        res.sendFile(__dirname + "/public/fotochallenges/challenges.html");
    }else{
        res.sendFile(__dirname + "/public/fotochallenge.html")
    }
});

//Du befindest dich gerade auf "challenges.html"
app.post("/fotochallenges/challenge1", (req, res) => {
    
        res.sendFile(__dirname + "/public/fotochallenges/challenge1.html");
    
});



//Du befindest dich gerade bei "fotoChallenge1.html"
app.post("/fotochallenges/challenges", (req, res) => {
    
        res.sendFile(__dirname + "/public/fotochallenges/challenges.html");
    
});

//Du befindest dich gerade bei "challenge1.html"
app.post("/fotochallenges/fotos/fotoChallenge1", (req, res) => {
    
        res.sendFile(__dirname + "/public/fotochallenges/fotos/fotoChallenge1.html");
    
});

//Du befindest dich gerade auf "fotochallenge.html"
app.post("/fototeam", (req, res) => {
  
    res.sendFile(__dirname + "/public/fototeam.html");
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

