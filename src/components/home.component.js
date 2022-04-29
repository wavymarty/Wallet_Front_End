import React, { Component } from "react";
export default class Home extends Component {
 render() {
 return (
 <div class="container">
 <div class="panel panel-default">
 <div class="alert alert-success">
 <span class="lead">
 Welcome to User Registration App
 </span>
 </div>
 <div class="panel-body ">
 <div class="alert alert-info">
 <ul>
 <li>
 Please click on
 <strong> List All Users
</strong>
 to get all users.
 </li>
<li>
 Please click on<strong> Add User </strong>to add a new user.
 </li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 );
 }
}