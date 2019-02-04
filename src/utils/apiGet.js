import axios from 'axios'
export default axios.create({
	baseURL: process.env.VUE_APP_API_URL,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json'
	}
})
