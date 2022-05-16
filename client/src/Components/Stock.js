import React, { Component } from "react";
import axios from "axios";
import Search from './Search';
import Profile from './Profile';
import { Link } from "react-router-dom";
const API = 'http://139.59.47.100/stock'
// const API = 'http://localhost:4000/stock'

export class StockScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Symbol: 'IBM',
            AssetType: '',
            Name: '',
            notFound: ''
        };
    }

    getProfile(stock) {
        let finalURL = `${API}`;
        if (!stock) {
            stock = 'IBM'
        }
        axios.post(finalURL, {
            'stock': stock
        })
            .then((res) => res.data)
            .then((data) => {
                console.log(data);
                this.setState({
                    Symbol: 'IBM',
                    Name: data.Name,
                    High: data['52WeekHigh'],
                    Low: data['52WeekLow'],
                    Outstanding: data.SharesOutstanding,
                    EPS: data.EPS,
                    MarketCap: data.MarketCapitalization,
                    notFound: data.message
                })
            })
            .catch((error) => console.log(error))
    }

    componentDidMount() {
        this.getProfile(this.state.stock);
    }
    logout() {
        localStorage.clear();
        window.location.href = '/login';
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <Search searchProfile={this.getProfile.bind(this)} />
                        <Profile userData={this.state} />
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                       <center> <Link to="/logout" onClick={() => this.logout()}>Logout</Link> </center> 
                    </div>
                </div>
            </div>
        );
    }
}

export default StockScreen;