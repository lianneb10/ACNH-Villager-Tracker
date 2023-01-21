# 🍃 ACNH Villager Tracker 
MERN full-stack app (Mongoose, Express, React, Node) app with a React frontend, [deployed to Heroku](https://acnh-villager-tracker.herokuapp.com/).

## 📄 Table of contents
* ACNH Villager Tracker
  * [Screenshots](#screenshots)
  * [Technologies](#technologies)
  * [Setup](#setup)
  * [Features](#features)
  * [Inspiration](#inspiration)
  * [References](#references)
  * [External API](#external-api)
  * [Contact](#contact)

# Screenshots
![Screen Shot 2023-01-20 at 8 54 45 AM](https://user-images.githubusercontent.com/114965043/213757570-b76150c8-8875-4ba5-89a6-46b097e7c2af.png)
![Screen Shot 2023-01-20 at 8 55 18 AM](https://user-images.githubusercontent.com/114965043/213757580-cbde09a1-f080-4229-a72d-93779c60f04c.png)


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
Add database access credentials to db.js - recommend installing npm dotenv & using .env to hide credentials if commiting to Github


## Frontend
Change to client directory
Install dependencies using npm i.
run npm start. Frontend will open at http://localhost:8000/


# Features 
* Villager icons (pulled from external API) displayed within the islands on the home page
* Villager information (pulled from external API) displayed in the island detail page 
* Full CRUD on user model, full CRUD on island model, CRD on villager model
* Custom 404 Error page for handling URLs that do not exist in the code
* Custom favicon for website utilizing [realfavicongenerator](https://realfavicongenerator.net/svg-favicon/)

## Backend
* All data stored in MongoDB, which can be accessed and modified utilized the Mongo shell (mongosh).

## Frontend
* React app created from the command prompt using Create React App.
* Primer CSS framework for styling of the application.

# Inspiration 
* [AndrewJBateman](https://github.com/AndrewJBateman/pern-stack-todo) for README formatting
* [Matt's Allo Backend](https://github.com/GonczarM/Allo-BackEnd) for structuring with three controllers/models

# References
* [Primer CSS Documentation](https://primer.style/css/)
* Stackoverflow articles for debugging

# External API
* ACNH API: https://acnhapi.com/


# Contact
Repo created by Lianne Aratea, contact aratealianne@gmail.com
