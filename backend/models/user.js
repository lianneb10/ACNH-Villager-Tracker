const mongoose = require('mongoose');
const db = require('./index');

const userSchema = new mongoose.Schema({
	username: { 
		type: String, 
		required: true },
	password: { 
		type: String, 
		required: true },
	islands: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Island'
	}]
});

    //react cascade deleting
    userSchema.post('findOneAndDelete', function(result) {
		for (const islandId of result.islands) {
		db.Island.findOneAndDelete({
		_id: islandId,}).exec();}
    });

const User = mongoose.model('User', userSchema);

module.exports = User;
