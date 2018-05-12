var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/index.html');
	// res.send(__dirname + '/index.html');
	// res.sendFile('D:/mytest/git/my-porject/index.html');
});
module.exports = router;