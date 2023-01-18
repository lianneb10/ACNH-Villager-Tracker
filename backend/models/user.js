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

  //ref: https://stackoverflow.com/questions/59207137/mongoose-pre-middleware-with-findbyidanddelete
    // https://mongoosejs.com/docs/middleware.html#notes

    //react cascade deleting
    userSchema.post('findOneAndDelete', function(result) {
		for (const islandId of result.islands) {
		db.Island.findOneAndDelete({
		_id: islandId,}).exec();}
    });

const User = mongoose.model('User', userSchema);

module.exports = User;
