// Entry point to the back-end
const express = require('express');
connectDB = require('./config/db');
const app = express();
/* const path = require('path'); */

// Connect Database
connectDB();

// Init Middleware

////// Define routes
app.use('/', require('./routes/routes')); // use the routes

// If there is an environment variable for hosted port, use it, otherwise use 1000 (development)
const PORT = process.env.PORT || 1000;

// Start server with PORT
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
