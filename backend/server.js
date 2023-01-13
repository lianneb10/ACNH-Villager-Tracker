// dependencies
const express = require('express');
const app = express();
const cors = require('cors');
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

//routes
app.use('/user', usersCtrl);
app.use('/island', islandsCtrl);
app.use('/villager', villagerCtrl)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
}) 
