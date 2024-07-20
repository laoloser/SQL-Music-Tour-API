// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
// const { Pool } = require('pg');


//   const pool = new Pool({
//     connectionString: process.env.PG_URI,
//     ssl: {
//         rejectUnauthorized: false
//     }
//   });
  


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})