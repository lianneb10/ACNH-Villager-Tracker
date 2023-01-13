const mongoose = require('mongoose');

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

const Villager = mongoose.model('Villager', villagerSchema);

module.exports = Villager;
