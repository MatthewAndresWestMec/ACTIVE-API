# Rapid API Project

This is a simple server project to access two external APIs and use these APIs to create an info board with HTML and JS

## Authors

- [@MatthewAndresWestMec](https://github.com/MatthewAndresWestMec)
- [@dakotarobot213](https://github.com/dakotarobot213)

## Acknowledgements for API

- [Geography API](https://rapidapi.com/mmplabsadm/api/geography4/)
- [Weather API](https://www.weatherapi.com/)

## License

[MIT](https://choosealicense.com/licenses/mit/)

### Weather

- **Endpoint:** `/weather`
  - **Method:** GET
  - **Parameters:**
    - `cityInput` (Optional): Input the city name to get weather information. If not provided, it defaults to Phoenix, Arizona.
  - **Functionality:**
    - Retrieves weather information for the specified city using the Weather API.

### Country

- **Endpoint:** `/country`
  - **Method:** GET
  - **Parameters:**
    - `countryInput` (Optional): Input the country name to get its geographical details. If not provided, it defaults to the United States.
  - **Functionality:**
    - Fetches geographical details of the specified country using the Country Geography API.

## Running the Application

To run this API, follow these steps:

1. Ensure you have Node.js installed.
2. Install the required dependencies using `npm install`.
3. Create a .env file in the root of the project with three variables: `PORT`, `WEATHER`, and `GEOGRAPHY`
4. Set `PORT` to your preferred port for this API.
5. Set both `WEATHER` and `GEOGRAPHY` to their respective API keys.
6. Run the application using `npm start` or your preferred command.

## Code Explanation

The main file (`app.js` or similar) contains the Express server setup with various endpoints to handle weather and country information retrieval. It uses Axios for making HTTP requests to the respective APIs.

## Important Notes

- **Port:** The API runs on port 2000, and it's hot-swappable as defined in the main file.
- **APIs** You need to provide your own API keys for Weather and Geography in order to use our API.

## API Dependencies

- **Express:** Web application framework for Node.js
- **Axios:** Promise-based HTTP client for the browser and Node.js
