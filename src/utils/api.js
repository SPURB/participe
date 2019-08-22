import axios from 'axios'
export default axios.create({
	'Content-Post': process.env.VUE_APP_API_TOKEN,
	baseURL: process.env.VUE_APP_API_URL,
	timeout: 15000
})
