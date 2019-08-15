import axios from 'axios'
export default axios.create({
	baseURL: process.env.VUE_APP_API_WP_CUSTOM,
	timeout: 5000
})
