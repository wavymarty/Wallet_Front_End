import axios from "axios";
var root = "root";
var password = "password";
export default axios.create({
    baseURL: "http://localhost:8082/blockchain/v1",
    headers: {
        "Content-type": "application/json"
    },
    auth: {

        username: root,
    
        password: password
    
     }
});