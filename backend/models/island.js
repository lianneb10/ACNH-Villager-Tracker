const mongoose = require('mongoose');

const islandSchema = new mongoose.Schema ({
    name: { 
        type: String, 
        required: true },
    villagers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Villager'
    }]
    })

const Island = mongoose.model('Island', islandSchema);

module.exports = Island;