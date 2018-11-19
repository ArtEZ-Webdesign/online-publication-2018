const mongoose = require('mongoose');

const Laptop = mongoose.model('Laptop', {
	make: String,
	model: String,
	year: Number
});

module.exports = Laptop;
