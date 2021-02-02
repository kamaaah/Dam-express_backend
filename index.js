// const {response} = require ('express');

var express = require("express");
var app = express();
var bodyParser = require("body-parser");


// ***  Appel du module router person.js ****
var person = require("./routes/person");

// **** Appel du module router post.js ****
var post = require("./routes/post");

// **** Appel du module router address.js ****
var address = require("./routes/address");

/* Déclaration de vues Embedded Javascript (EJSQ)  */
app.set("engine_view", "ejs");

/* Utilise Body-Parser pour pouvoir lire les entrées ... 
le stocke comme un obj Javascript */
app.use(bodyParser.urlencoded({ extended: false }));

/* on récupère les datas de forms.ejs via le chemin /forms ds l'url :
 http://localhost:8080/forms */
app.get('/forms', (req, res) => {
  res.render("forms.ejs");
});


/*  On envoie les datas récupérées(Prenom et nom) dans forms.ejs et 
    on les affiche dans presentation.ejs via la redirection ./ 
*/
// app.post('./', (req, res) => {
//   res.render("presentation.ejs", {
//     prenom : req.body.prenom,
//     nom : req.body.nom,
//   });
// });



/* **** Appel des routes déclarées dans person, js à partir de la route /person **** 
http://localhost:8080/personn/add
http://localhost:8080/personn/edit
http://localhost:8080/personn/delete
http://localhost:8080/personn/search  
*/

app.use("/person", person);
app.use("/address", address);
// app.use("/post");

    
/*  damienmonchaty  15 h 07
Exo : Creer un projet Express qui permet d’ecrire et d’afficher des
commentaires */
let comments = [];

app.get('/comments', (req, res) => {
    res.render('comment.ejs', {
        comments
    });
});

app.post('/', (req, res) => {
    let comment = {
        title: req.body.title,
        comment: req.body.comment,
        date: new Date(Date.now())
    };
    comments.push(comment);
    res.render('comment.ejs', {
        comments
    });
});

app.listen(8080, function () {
  console.log("Express en attente");
});
