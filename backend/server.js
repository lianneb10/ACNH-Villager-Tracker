const express = require('express');
const app = express();
const port = 3001;

const user_model = require('./user_model');

app.use(express.json());
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Content-Type, Access-Control-Allow-Headers'
	);
	next();
});


//middleware

// app.use(cors())
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.get('/', (req, res) => {
	user_model
		.getUsers()
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

app.post('/users', (req, res) => {
	user_model
		.createUser(req.body)
		.then((response) => {
			res.status(200).send(response);
		})
		.catch((error) => {
			res.status(500).send(error);
		});
});

app.delete('/users/:id', (req, res) => {
	user_model
		.deleteUser(req.params.id)
		.then((response) => {
			res.status(200).send(response);
		})
		.catch((error) => {
			res.status(500).send(error.message);
		});
});
app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
