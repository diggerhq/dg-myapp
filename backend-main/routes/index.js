var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/message', function(req, res, next) {
  res.status(200).send({
    message: process.env.DG_MESSAGE || "Hello World"
  });
});

module.exports = router;
