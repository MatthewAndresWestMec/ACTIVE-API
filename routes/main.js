const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/weather", async (req, res) => {
	const options = {
		method: "GET",
		url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
		params: {
			q: "Phoenix",
			days: "1",
		},
		headers: {
			"X-RapidAPI-Key": "9a5538dfe1msh2d0809fe77537c5p19ad31jsn919dd5815d3f",
			"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
		},
	};

	try {
		await axios.request(options).then((weather, error) => {
			res.render("pages/weather", { weather: weather.data });
		});
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;
