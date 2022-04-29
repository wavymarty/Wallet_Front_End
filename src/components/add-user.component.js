import React, { Component } from "react";
import userRegistrationService from "../services/user-registration.service";
export default class AddUser extends Component {
    render() {
        return (
        <div className="submit-form">
        <div className="form-group">
        <label htmlFor="firstName">First Name
       </label>
        <input
        type="text"
     
        className="form-control"
        id="firstName"
        required
        value={this.state.firstName}
        onChange={e => this.
       onChangeFirstName(e)}
        name="firstName" />
        </div>
        <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" className="form-control"  id="lastName"  required   value={this.state.lastName}
        onChange={e => this.
       onChangeLastName(e)}
        name="lastName" />
        </div>
        <div className="form-group">
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
        </div>
        <br/>
        <button onClick={this.handleSubmit}
       className="btn btn-success">
        Submit
        </button>
        </div>
        )
        }
       
    constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.
   bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newUser = this.newUser.bind(this);
    this.state = {
    id: null,
    firstName: "",
   
    age: "",
    address: "",
    createdDate: ""
    };
    }
    onChangeFirstName(event) {
        this.setState({
        firstName: event.target.value
        });
        }
        onChangeLastName(event) {
        this.setState({
        lastName: event.target.value
        });
        }
        onChangeAge(event) {
        this.setState({
        age: event.target.value
        });
        }
      
        onChangeAddress(event) {
        this.setState({
        address: event.target.value
        });
        }
        handleSubmit(event) {
        console.log(this.state)
        var data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        address: this.state.address
        };
        event.preventDefault();
        userRegistrationService.createUser(data)
        .then(response => {
        alert('You submitted successfully! ' + data.
       firstName + ' User is created');
        this.setState({
        id: response.data.id,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        age: response.data.age,
        address: response.data.address
        });
        this.props.history.push("/list-all-users");
        })  
        .catch(e => {
        console.log(e);
        });
        }
        newUser() {
        this.setState({
        id: null,  firstName: "", lastName: "",  age: "",
        address: "",
        createdDate: ""
        });
        }
    }

