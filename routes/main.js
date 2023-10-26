const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("", (req, res) => {
  const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://geography4.p.rapidapi.com/apis/geography/v1/country/group/NATO',
  params: {
    limit: '10',
    sortBy: 'name',
    sortOrder: 'asc'
  },
  headers: {
    'X-RapidAPI-Key': '9a5538dfe1msh2d0809fe77537c5p19ad31jsn919dd5815d3f',
    'X-RapidAPI-Host': 'geography4.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
	axios({method:'get', url}).
  res.render("pages/readme", {
    
  });
});

module.exports = router;
