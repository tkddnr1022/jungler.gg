const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recordSchema = new Schema({
	side: String,
	line: Number,
	result: String
});

module.exports = mongoose.model('record', recordSchema);