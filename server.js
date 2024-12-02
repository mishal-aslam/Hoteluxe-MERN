const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();

const dbConfig = require('./db'); 
const roomsRoute = require('./routes/roomsRoute');

app.use(cors());

app.use(express.json());

// Use the rooms route
app.use('/api/rooms', roomsRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node JS Server Started on port ${port}`));
