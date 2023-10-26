// Importing packages
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const expressEJSLayout = require("express-ejs-layouts");
// Fetching dotenv
require("dotenv").config();
// Fetching routes
const main = require("./routes/main");
// Creating app
const app = express();
// Creating router
const router = express.Router();
// Declaring backup port
const PORT = 5000;

// Static assets
app.use(express.static("./public"));
// Setting EJS libraries
app.set("view engine", "ejs");
app.use(expressEJSLayout);
// Parse Form Data
app.use(express.urlencoded({ extended: false }));
// Parse JSON Data
app.use(morgan("tiny"));
app.use(express.json());
// routes
app.use("/", main);

// Server Listen
const initServer = async () => {
	try {
		app.listen(process.env.PORT || PORT, console.log(`Server listening on port ${process.env.PORT || PORT}`));
	} catch (error) {
		console.log(error);
	}
};

initServer();
