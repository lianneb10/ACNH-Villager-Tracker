# ACNH-Villager-Tracker

# 🍃 ACNH Villager Tracker 
MERN full-stack app (Mongoose, Express, React, Node) app with a React frontend, planned to be deployed to Heroku. 

## 📄 Table of contents
* ACNH Villager Tracker
  * [Screenshots](#screenshots)
  * [Technologies](#technologies)
  * [Setup](#setup)
  * [Features](#features)
  * [Inspiration](#inspiration)
  * [Contact](#contact)

# Screenshots

# Technologies
## Backend
* Mongoose
* Express.js 
* Node.js 
* Postman API 

## Frontend
* React 
* Primer CSS Framework from Github

# Setup
## Backend
Install dependencies using npm i
Install nodemon globally if you don't already have it
Install PostgreSQL & run it (requires the password you created during installation)
Add database access credentials to db.js - recommend installing npm dotenv & using .env to hide credentials if commiting to Github
Postgresql shell commands: \l list all databases. \c database1 connect to database1. \dt inspect tables. \d+ inspect table & show relation information. \q to quit


## Frontend
Change to client directory
Install dependencies using npm i.
run npm start. Frontend will open at http://localhost:3000/


# Features 

## Backend
All data stored in PostgreSQL database that can also be viewed and changed from the PostgreSQL shell (psql)

## Frontend
React app created from the command prompt using Create React App


# Inspiration & References
[AndrewJBateman](https://github.com/AndrewJBateman/pern-stack-todo) for README formatting
[Matt's Allo Backend](https://github.com/GonczarM/Allo-BackEnd) for structuring with three controllers/models


# Contact
Repo created by Lianne Aratea, contact aratealianne@gmail.com
