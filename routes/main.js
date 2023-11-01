const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/weather", async (req, res) => {
	const { cityInput } = req.query;
	const options = {
		method: "GET",
		url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
		params: {
			q: cityInput ? cityInput : "Phoenix, Arizona",
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
router.get("/country", async (req, res) => {
	const { countryInput } = req.query;
	const options = {
		method: "GET",
		url: `https://geography4.p.rapidapi.com/apis/geography/v1/country/name/${countryInput ? countryInput : "United States"}`,
		params: {
			limit: "1",
			sortOrder: "asc",
			sortBy: "name",
		},
		headers: {
			"X-RapidAPI-Key": "9a5538dfe1msh2d0809fe77537c5p19ad31jsn919dd5815d3f",
			"X-RapidAPI-Host": "geography4.p.rapidapi.com",
		},
	};

	try {
		await axios
			.request(options)
			.then((country) => {
				if (country.data[0]) {
					res.status(200).render("pages/country", { country: country.data[0], valid: true });
				} else {
					res.status(400).render("pages/country", { country: {}, valid: false });
				}
			})
			.catch(() => {
				res.status(400).render("pages/country", { country: {}, valid: false });
			});
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;
