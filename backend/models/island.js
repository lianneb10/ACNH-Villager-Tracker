const mongoose = require('mongoose');
const db = require('./index');

const islandSchema = new mongoose.Schema ({
    name: { 
        type: String, 
        required: true },
    villagers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Villager'
    }]
    })

    //ref: https://stackoverflow.com/questions/59207137/mongoose-pre-middleware-with-findbyidanddelete
    // https://mongoosejs.com/docs/middleware.html#notes

    //react cascade deleting
    islandSchema.post('findOneAndDelete', function(result) {
    db.User.updateMany({}, {$pull: {islands: result._id}}).exec();
	db.Villager.deleteMany({
		_id: { $in: result.villagers},}).exec();
    });
    
    const Island = mongoose.model('Island', islandSchema);

module.exports = Island;