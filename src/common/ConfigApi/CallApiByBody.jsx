import axios from "axios";
const url = "https://cometicv1.000webhostapp.com/api"
axios.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req
})
export default function CallApiByBody(endpoint, method = "GET", body) {
    return axios({
        url: `${url}/${endpoint}`,
        method: method,
        data: body
    })
}