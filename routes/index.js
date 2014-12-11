var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/ls/:dir', function(req, res) {

	fs.readdir( req.params.dir, function(err, files) { 
		res.render('index', { title: 'File Browser', files:files });
	});
});

module.exports = router;
