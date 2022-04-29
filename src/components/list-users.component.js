import React, { Component } from "react";
import UserDataService from '../services/user-registration.service';
export default class UsersList extends Component {
    constructor(props) {
     super(props);
     this.retrieveUsers = this.retrieveUsers.bind(this);
     this.deleteUser = this.deleteUser.bind(this);
     this.state = {
     users: []
     };
     }
     componentDidMount() {
     this.retrieveUsers();
     }
     retrieveUsers() {
     UserDataService.getAllUsers()
     .then(response => {
     this.setState({
     users: response.data
     });
     console.log(response.data);
     })
     .catch(e => {
     console.log(e.target);
     });
     }
     deleteUser(user, index) {
     UserDataService.deleteUser(user.id)
     .then(response => {
     alert('Deleted successfully! ' + user.
    firstName);
     this.retrieveUsers();
     })
         .catch(e => {
     console.log(e.target);
     });
     }
render() {
    const { users } = this.state;
    return (
    <table class="table table-hover">
    <caption>List of users</caption>
    <thead class="thead-dark">
    <tr>
    <th scope="col">#</th>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Age</th>
    <th scope="col">Address</th>
    <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
    {users && users.map((user, index) => (
    <tr>
    <th scope="row">{index+1}</th>
   <td>{user.firstName}</td>
   <td>{user.lastName}</td>
   <td>{user.age}</td>
   <td>{user.address}</td>
   <td>
    <button type="button"
    onClick={() => this.
   deleteUser(user,
   index)}
    class="btn btn-danger
   custom-width"
    key={index}
    >
    <span class="glyphicon
   glyphicon-remove">
    Delete
    </span>
    </button>
    </td>
    </tr>
    ))}
    </tbody>
    </table>
    );
    }
   }