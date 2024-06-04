import axios from "axios";


const api = axios.create({
    // baseURL: "http://localhost:3001",
    baseURL: "https://lux-ventus.onrender.com/",
    timeout: 20000
})

export default api