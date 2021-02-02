var express = require("express");
var router = express.Router();

// var bodyParser = express.bodyParser();

router.post('/search', function(req, res) {   
    res.send('Rechercher personne');
});

router.post('/add', function(req, res) {    
    res.send('Ajout personne');
});
router.post('/edit', function(req, res) {    
    res.send('Mise à jour personne');
});

router.post('/delete', function(req, res) {    
    res.send('Suppression personne');
});


// http://localhost/nom/John
router.post('/', (req, res) => {
    var persons = [  
    {nom : 'Wick', prenom : 'John', age : 40},
    {nom : 'Sykwalker', prenom : 'Anakin', age : 25},
    {nom : 'Parker', prenom : 'Peter', age : 22},
];

var personTitle = 'Liste de personnes';

res.render('index.ejs', {
         personTitle,
         persons,
         nom : "Volverine"
        })
});

// http://localhost/nom/John

// app.get('/hello/:nom', (req, res) => {

//     var persons = [  
//         {nom : 'Wick', prenom : 'John', age : 40},
//         {nom : 'Sykwalker', prenom : 'Anakin', age : 25},
//         {nom : 'Parker', prenom : 'Peter', age : 22}
//     ];
//     var personTitle = 'Liste de personnes';
    
//     res.render('index.ejs', {
//              personTitle,
//              persons,
//              nom : req.params.nom
//             })   
// });

module.exports = router;