import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class RegisterScreen extends Component {
    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        success: false,
        error: false,
    };

    onSignup = (e) => {
        e.preventDefault();
        const { firstname, lastname, username, password } = this.state;
        axios({
            method: "POST",
            data: {
                firstname,
                lastname,
                username,
                password
            },
            url: "http://127.0.0.1/register",
        }).then((res) => {
            console.log(res)
            window.localStorage.setItem("isAuthenticated", true);
            if (res.status === 200) {
                this.setState({ success: true, error: false });
                this.props.history.push("/stock");
            }
        }).catch(({ response }) => {
            this.setState({ error: response.data.message, success: false });
        });
    };

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
            error: false,
            success: false,
        });
    };
    render() {
        const { error, success } = this.state;
        return (
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <h3><center>Register</center></h3>
                        <form onSubmit={this.onSignup}>
                            {success && "You've registered in successfully"}
                            {error}
                            <div className="form-group">
                                <label>First Name</label>
                                <input  name="firstname" type="text" className="form-control" placeholder="Enter your first name" onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input  name="lastname" type="text" className="form-control" placeholder="Enter your last name" onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label>UserName</label>
                                <input name="username" type="text" className="form-control" placeholder="Enter username" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input name="password" type="password" className="form-control" placeholder="Password" onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <p className="mt-2">
                                Already have an account? <Link to={"/login"}>Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterScreen;