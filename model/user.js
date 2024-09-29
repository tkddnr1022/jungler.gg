const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	id: String,
	pw: String,
	creation: String,
	money: Number,
	account: String
});

module.exports = mongoose.model('user', userSchema);