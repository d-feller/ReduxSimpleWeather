const axios = require('axios');
const keys = require('../config/keys');
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${keys.API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},de`;
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
