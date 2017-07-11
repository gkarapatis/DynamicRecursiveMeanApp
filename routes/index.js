var express = require('express');
var router = express.Router();


//router.get('*', function(req, res) {
//  res.sendfile('index.html')
//})

router.get('/', function(req, res, next) {
    res.render('index.html');
    //res.send('Index Page');
});
router.get('/an/*', function(req, res, next) {
    res.render('index.html');
    //res.send('Index Page');
});

module.exports = router;