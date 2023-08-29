import axios from "axios";
export default axios.create({
 withCredentials: true,
 baseURL: "http://localhost:8084/user/",
 headers: {
 "Content-type": "application/json",
 authorization: 'Basic ' + window.btoa(user + ":" + password)
 },
});