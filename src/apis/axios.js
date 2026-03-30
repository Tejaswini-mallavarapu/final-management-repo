import axios from "axios";
const api = axios.create({
    baseURL: "https://b17q02g4-5051.asse.devtunnels.ms/rest2/0.1",
    headers: {
        "Content-Type": "application/json",
    },
});
export default api;
