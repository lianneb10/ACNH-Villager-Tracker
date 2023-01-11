const Pool = require('pg').Pool;
const pool = new Pool({
	user: 'liannearatea',
	host: 'localhost',
	database: 'acnh_users',
	password: 'root',
	port: 5432,
});


async function getUsers() {
	result = await pool.query('SELECT * FROM users ORDER BY id ASC');
    return(result);
};

const createUser = (body) => {
	return new Promise(function (resolve, reject) {
		const { username, password } = body;
		pool.query(
			'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
			[username, password],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve('A new User has been added');
			}
		);
	});
};

const deleteUser = (id) => {
    console.log(`hello ${id}`);
	return new Promise(function (resolve, reject) {
        const userID = parseInt(id);
        
		pool.query(
			'DELETE FROM users WHERE id = $1',
			[userID],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve('User deleted successfully');
			}
		);
	});
};

module.exports = {
	getUsers,
	createUser,
	deleteUser,
};