import http from '../http-common';
class UserDataService {
 getAllUsers() {
 return http.get("/users");
 }
 createUser(user) {
 return http.post("/createUser", user);
 }
 deleteUser(id) {
 return http.delete(`/user/delete/id/${id}`);
 }
}
export default new UserDataService();