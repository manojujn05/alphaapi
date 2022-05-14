import React, { Component } from 'react';
class Profile extends Component {
    render() {
        let userdata = this.props.userData;
        if (userdata.message === "Not Found") {
            return (
                <div className="notfound">
                    <h2>Heyyyyy</h2>
                    <p>Are you sure, for whom you are looking for ???</p>
                </div>
            );
        }
        else {
            return (
                <div className="card" >
                    <div className="card-header">
                    {userdata.Name}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <i> 52WeekHigh : {userdata.High}</i></li>
                        <li className="list-group-item"><i> 52WeekLow : {userdata.Low}</i></li>
                        <li className="list-group-item">   <i>Outstanding Shares : {userdata.Outstanding}</i> </li>
                        <li className="list-group-item"> <i> EPS : {userdata.EPS}</i></li>
                        <li className="list-group-item"><i> MarketCap : {userdata.MarketCap}</i></li>
                    </ul>
                </div>
            );
        }
    }
}

export default Profile;
