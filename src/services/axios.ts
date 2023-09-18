import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY || 'apiKey undefined';
const apiUrl = import.meta.env.VITE_API_URL || 'apiUrl undefined';

export default axios.create({
	baseURL: apiUrl,
	headers: {
		Authorization: apiKey,
	},
});