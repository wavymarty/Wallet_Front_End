import React, { Component } from "react";
import userRegistrationService from "../services/user-registration.service";
export default class AddUser extends Component {
    render() {
        return (
            <div className="submit-form">
                <div className="form-group">
                    <label htmlFor="userName">User Name </label>
                    <input
                        type="text"

                        className="form-control"
                        id="userName"
                        required
                        value={this.state.userName}
                        onChange={e => this.
                            onChangeUserName(e)}
                        name="userName" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" required value={this.state.password}
                        onChange={e => this.
                            onChangePassword(e)}
                        name="password" />
                </div>
                {/*      <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        className="form-control"
                        id="age"
                        required
                        value={this.state.age}

                        onChange={e => this.onChangeAge(e)}
                        name="age"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        required
                        value={this.state.address}
                        onChange={e => this.onChangeAddress(e)}
                        name="address"
                    />
                </div>*/}
                <br />
                <button onClick={this.handleSubmit}
                    className="btn btn-success">
                    Submit
                </button>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.
            bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
       // this.onChangeAge = this.onChangeAge.bind(this);
       // this.onChangeAddress = this.onChangeAddress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.newUser = this.newUser.bind(this);
        this.state = {
            id: null,
            name: "",

            password: "",
            //address: "",
           // createdDate: ""
        };
    }
    onChangeUserName(event) {
        this.setState({
            userName: event.target.value
        });
    }
    onChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }
    // onChangeAge(event) {
    //     this.setState({
    //         age: event.target.value
    //     });
    // }

    // onChangeAddress(event) {
    //     this.setState({
    //         address: event.target.value
    //     });
    // }
    handleSubmit(event) {
        console.log(this.state)
        var data = {
            name: this.state.userName,
            password: this.state.password,
            //age: this.state.age,
            //address: this.state.address
        };
        event.preventDefault();
        userRegistrationService.createUser(data)
            .then(response => {
                alert('You submitted successfully! ' + data.
                    name + ' User is created');
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    password: response.data.password,
                   // age: response.data.age,
                   // address: response.data.address
                });
                this.props.history.push("/list-all-users");
            })
            .catch(e => {
                console.log(e);
            });
    }
    newUser() {
        this.setState({
            id: null, name: "", password: "", 
        });
    }
}

