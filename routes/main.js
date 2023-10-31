const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/weather", async (req, res) => {
	const { cityInput } = req.query;
	const options = {
		method: "GET",
		url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
		params: {
			q: cityInput ? cityInput : "Arizona",
			days: "1",
		},
		headers: {
			"X-RapidAPI-Key": "9a5538dfe1msh2d0809fe77537c5p19ad31jsn919dd5815d3f",
			"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
		},
	};

	try {
		await axios
			.request(options)
			.then((weather) => {
				res.status(200).render("pages/weather", { weather: weather.data, valid: true });
			})
			.catch(() => {
				res.status(400).render("pages/weather", { weather: {}, valid: false });
			});
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;
