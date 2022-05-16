import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const LOGINAPI = 'http://139.59.47.100/login'
// const LOGINAPI = 'http://localhost:4000/login'
export class LoginScreen extends Component {
    

    constructor(props) {
        super(props)
        let token = localStorage.getItem('isAuthenticated');
        this.state = { success: false, error: false };
        if (token) {
            console.log("You can't login if you are logged in!")
             props.history.push("/stock");
        }
    }

    onLogin = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        axios({
            method: "POST",
            data: {
                username,
                password
            },
            url: `${LOGINAPI}`,
        }).then((res) => {
            console.log(res)
            window.localStorage.setItem("isAuthenticated", true);
            if (res.status === 200) {
                this.setState({ success: true, error: false });
                this.props.history.push("/stock");
            }else{
                this.setState({ success: false, error: true });
                this.props.history.push("/login");
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
        return (
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <h3><center>Login</center></h3>
                        <form onSubmit={this.onLogin}>
                            {this.state.success}
                            {this.state.error}
                            <div className="form-group">
                                <label>UserName</label>
                                <input name="username" type="text" className="form-control" placeholder="Enter username" onChange={this.onChange} required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input name="password" type="password" className="form-control" placeholder="Password" onChange={this.onChange} required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <p className="mt-2">
                                Don’t have an account? Sign up?{" "}
                                <Link to={"/register"}>Register</Link>
                            </p>
                        </form>
                    </div>
                </div >
            </div >
        );
    }
}

export default LoginScreen;