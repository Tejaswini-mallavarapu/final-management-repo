import axios from "axios";
const api = axios.create({
    baseURL: " http://localhost:5051/rest2/0.1",
    headers: {
        "Content-Type": "application/json",
    },
});
export default api;
