import axios from 'axios'
export default axios.create({
	baseURL: `${process.env.VUE_APP_API_URL}v3`,
	timeout: 15000
})
