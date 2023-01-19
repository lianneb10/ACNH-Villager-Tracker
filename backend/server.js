// dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

require('./models');
require('dotenv').config();
const PORT = process.env.PORT;
// access controllers
const usersCtrl = require('./controllers/users');
const islandsCtrl = require('./controllers/islands');
const villagerCtrl = require('./controllers/villagers');

//middleware
// cross origin allowance
app.use(cors());
// parse the body data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//react build folder for static files
app.use(
	express.static(path.join(path.dirname(__dirname), 'frontend', 'build'))
);

//routes
app.use('/user', usersCtrl);
app.use('/island', islandsCtrl);
app.use('/villager', villagerCtrl)
// any other route not matching the routes above gets routed by React
app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
}) 
