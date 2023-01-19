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
router.post('/create/:user_id', isAuthenticated, async (req, res) => {
		const createdIsland = await db.Island.create(req.body);
        await db.User.findOneAndUpdate({ _id: req.params.user_id}, {$push: {islands: createdIsland._id}});
		res.json({
			island: createdIsland,
		});
    })

// index
router.get('/', async (req, res) => {
	const allIslands = await db.Island.find({});
	res.json(allIslands);
});

// show
// router.get('/:id', async (req, res) => {
// 	const foundIsland = await db.Island.findById(req.params.id);
// 	res.json({
// 		island: foundIsland,
// 	});
// });

//update
router.put('/:id', isAuthenticated, async (req, res) => {
	const updatedIsland = await db.Island.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.json(updatedIsland);
});

//delete
router.delete('/:id', isAuthenticated, async (req, res) => {
	await db.Island.findByIdAndDelete(req.params.id);
	res.sendStatus(200);
});

module.exports = router;
