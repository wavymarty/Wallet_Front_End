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
    UserDataService.deleteUser(user.id).then(response => {
        alert('Deleted successfully! ' + user.firstName);
        this.retrieveUsers();
      }).catch(e => {
        console.log(e.target);
      });
  }
  render() {
    const { users } = this.state;
    return (
      
      <table className="table table-hover">
        <caption>List of users</caption>
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID-DATABASE</th>
            <th scope="col">User Name</th>
            {/*<th scope="col">Age</th>*/}
            <th scope="col">Password</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user,index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              
              <td >{user.id}</td>
              <td>{user.name}</td>
              <td>{user.password}</td>
              {/*<td>{user.address}</td>*/}
              <td>
                <button type="button"
                  onClick={() => this.deleteUser(user,index)
                  }
                  className="btn btn-danger
   custom-width"
                  key={index}
                >
                  <span className="glyphicon
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