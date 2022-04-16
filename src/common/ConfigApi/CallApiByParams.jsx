import axios from "axios";
const url = "http://localhost/api"
axios.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req
})
export default function CallApiByParams(endpoint, method = "GET", body) {
    return axios({
        url: `${url}/${endpoint}`,
        method: method,
        params: body
    })
}