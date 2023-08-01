import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:8082/blockchain/v1",
    headers: {
        "Content-type": "application/json"
    },
});