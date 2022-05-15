import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class LoginScreen extends Component {
    state = { username: "", password: "", success: false, error: false };

    constructor(props) {
        super(props)
        let token = localStorage.getItem('isAuthenticated');
        console.log(token);
        if (token) {
            console.log("You can't login if you are logged in!")
            //  props.history.push("/stock");
        }
    }

    onLogin = (e) => {
        e.preventDefault();
        let API = `http://139.59.47.100`;
        const { username, password } = this.state;
        axios({
            method: "POST",
            data: {
                username,
                password
            },
            url: `${API}/login`,
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
                        <form onSubmit={this.onLogin}>
                            {success && "You've logged in successfully"}
                            {error}
                            <div className="form-group">
                                <label>UserName</label>
                                <input name="username" type="text" className="form-control" placeholder="Enter username" onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input name="password" type="password" className="form-control" placeholder="Password" onChange={this.onChange} />
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