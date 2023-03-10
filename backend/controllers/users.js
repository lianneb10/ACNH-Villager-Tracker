const express = require('express');
const router = express.Router();
const db = require('../models');
const jwt = require('jwt-simple');
const config = require('../config/config');

function isAuthenticated(req, res, next) {
	if (req.headers.authorization) {
		next();
	} else {
		res.sendStatus(401);
	}
}

//signup create route
router.post('/signup', async (req, res) => {
	const foundUser = await db.User.findOne({ username: req.body.username });
	if (!foundUser) {
		const createdUser = await db.User.create(req.body);
		const payload = { id: createdUser._id };
		const token = jwt.encode(payload, config.jwtSecret);
		res.json({
			user: createdUser,
			token: token,
		});
	} else {
		res.sendStatus(401);
	}
});

//login route
router.post('/login', async (req, res) => {
	const foundUser = await db.User.findOne({ username: req.body.username });
	if (foundUser === null) {
		res.sendStatus(404)
	}
	else if (req.body.password === foundUser.password) {
		const payload = { id: foundUser._id };
		const token = jwt.encode(payload, config.jwtSecret);
		res.json({
			user: foundUser,
			token: token,
		});
	} else {
		res.sendStatus(401);
	}
});

// token show
router.get('/token', isAuthenticated, async (req, res) => {
	const token = req.headers.authorization;
	const decoded = jwt.decode(token, config.jwtSecret);
	const foundUser = await db.User.findById(decoded.id);
	res.json({
		user: foundUser,
	});
});

// index
router.get('/', async (req, res) => {
	const allUsers = await db.User.find({});
	res.json(allUsers);
});

// show
router.get('/:id', async (req, res) => {
	const foundUser = await db.User.findById(req.params.id).populate({path: 'islands', populate: {path: 'villagers'}});
	res.json({
		user: foundUser,
	});
});

//update
router.put('/:id', isAuthenticated, async (req, res) => {
	const updatedUser = await db.User.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.json(updatedUser);
});

//delete
router.delete('/:id', isAuthenticated, async (req, res) => {
	await db.User.findByIdAndDelete(req.params.id);
	res.sendStatus(200);
});

module.exports = router;
