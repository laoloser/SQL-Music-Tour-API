// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const bandsController = require('./controllers/bands_controller'); // Adjust the path as needed

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT ROUTE
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    });
});

// USE BANDS CONTROLLER
app.use('/bands', bandsController);

// LISTEN
app.listen(process.env.PORT || 3000, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT || 3000}`);
});
