import React, { Component } from "react";
export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="alert alert-success">
                        <span class="lead">
                            Welcome to User Registration App
                        </span>
                    </div>
                    <div className="panel-body ">
                        <div className="alert alert-info">
                            <ul>
                                <li>
                                    Please click on
                                    <strong> List All Users</strong>  to get all users.
                                </li>
                                <li>
                                    Please click on<strong> Add User </strong> to add a new user.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}