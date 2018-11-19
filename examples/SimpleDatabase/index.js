const express = require('express');
const mongoose = require('mongoose');

const Laptop = require('./models/Laptop'); // See this reference? Check that file out first. It's simply the model for a laptop... But it's no specific laptop yet.

mongoose.connect('mongodb://localhost/webdesign'); // Connect to your local MongoDB instance.

const app = express();

app.use(express.static('./app')); // App should use a static directory, namely ./app

app.get('/api/laptops', function (req, res) { // 1. This block listens for GET requests at /api/laptops
	function foundLaptops(laptops) {
		res.send(laptops); // 3. And sends the results as JSON back to the requester (the user's browser)
	}

	Laptop.find().then(foundLaptops); // 2. Finds all laptops in your database
});

app.get('/api/laptops/:make', function(req, res) { // Another GET block, this time, it records whatever you enter after /laptops, and uses that to query (search through) the database.
	function foundLaptops(laptops) {
		res.send(laptops);
	}

	Laptop.find({
		make: req.params.make
	}).then(foundLaptops);
});

app.listen(8080);

// Populate your database by adding some different laptops:

// const macbook = new Laptop({
// 	make: 'IBM',
// 	model: 'ThinkPad',
// 	year: 1992
// });
//
// macbook.save();
