import axios from 'axios'
export default axios.create({
	baseURL: process.env.VUE_APP_API_URL,
	timeout: 5000,
	headers: {
		// 'Content-Post': process.env.VUE_APP_API_TOKEN,
		'Content-Type': 'application/json'
	}
})
