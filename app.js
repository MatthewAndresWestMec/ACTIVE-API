// Importing packages
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
// Fetching dotenv
require("dotenv").config();
// Creating app
const app = express();
// Declaring port
const PORT = 5000;

// Static assets
app.use(express.static("./public"));
// Parse Form Data
app.use(express.urlencoded({ extended: false }));
// Parse JSON Data
app.use(morgan("tiny"));
app.use(express.json());

// Server Listen
const initServer = async () => {
	try {
		app.listen(PORT, console.log(`Server listening on port ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

initServer();
