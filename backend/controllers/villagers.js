const express = require('express');
const router = express.Router();
const db = require('../models');

function isAuthenticated(req, res, next) {
	if (req.headers.authorization) {
		next();
	} else {
		res.sendStatus(401);
	}
}

//create route
router.post('/create/:island_id', isAuthenticated, async (req, res) => {
		const createdVillager = await db.Villager.create(req.body);
		await db.Island.findOneAndUpdate(
			{ _id: req.params.island_id },
			{ $push: { villagers: createdVillager._id } }
		);
		res.json({
			villager: createdVillager,
		});
	}
)

// index
router.get('/', async (req, res) => {
	const allVillagers = await db.Villager.find({});
	res.json(allVillagers);
});

// show
router.get('/:id', async (req, res) => {
	const foundVillager = await db.Villager.findById(req.params.id);
	res.json({
		villager: foundVillager,
	});
});

//update
router.put('/:id', isAuthenticated, async (req, res) => {
	const updatedVillager = await db.Villager.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true,
		}
	);

	res.json(updatedVillager);
});

//delete
router.delete('/:id', isAuthenticated, async (req, res) => {
	await db.Villager.findByIdAndDelete(req.params.id);
	res.sendStatus(200);
});

module.exports = router;
