# le 01/02/2021
# installation
création du dossier =>
$ npm init
$ npm install express --save
$ npm i body-parser


##  Un Middleware est essentiellement une fonction qui recevra les objects Request et Response
## et comme 3ème argument, une fonction next() que l'on appelera une fois notre code middleware terminé
var middleWare1 = function (req, res, next) {
 console.log("middleWare: ", req.url);
 next();
};

var middleWare2 = function (req, res, next) {

console.log("middleWare2: ", req.url);
};

app.use(middleWare);

app.get('/', function (req, res, next)  {
    console.log("requete recu");
    res.send('Hello world');
next();
}, middleWare1, middleWare2);

var myLogger = function(req, res, next){
  console.log("Vous êtes connecté");
};

# Routage : Interception d'une requête client, via la méthode HTTP get()
# puis, rediction vers un  composant capable de retourner une reponse

app.get('/', function(req, res) {
#       Instruction qui nous permet de retourner une reponse au client
res.send('Get request to the home page');
});

app.post('/', function(req, res) {
    res.send('Post request to the home page');
});

# Précision d'une chaîne après notre route '/' = localhost:8080/personne
app.get('/person', function(req, res) {
#    Instruction qui nous permet de retourner une réponse au client
   res.send('Bonjour personne');
});


app.get('/address', function(req, res) {
    res.send('Ceci est mon adresse perso');
});
