var express = require('express');
var router = express.Router();

router.post('/search', function(req, res) {   
    res.send('Rechercher adresse');
});
router.post('/add', function(req, res) {   
    res.send('Ajouter adresse');
});
router.post('/edit', function(req, res) {   
    res.send('Mise à jour adresse');
});
router.post('/delete', function(req, res) {   
    res.send('Suppression adresse');
});

module.exports = router;