const mongoose = require('mongoose');
const db = require('./index');

const villagerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
    type: {
        type: String,
        required: true,
    }
});


//react cascade deleting
    villagerSchema.post('findOneAndDelete', function(result) {
   db.Island.updateOne({}, {$pull: {villagers: result._id}}).exec();})

const Villager = mongoose.model('Villager', villagerSchema);

module.exports = Villager;
