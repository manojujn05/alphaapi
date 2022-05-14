import React, { Component } from 'react';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stockName: ''
        };
    }
    submitForm(event) {
        event.preventDefault();
        let value = this.state.stockName;
         this.props.searchProfile(value);
    }
    render() {
        return (
            <div className="search-box">
                <form onSubmit={this.submitForm.bind(this)}>
                    <h3><center><label>Search your stock</label></center></h3><br/>
                    <input type="text" className="form-control" value={this.state.stockName} onChange={(value) => this.setState({ stockName: value.target.value })} placeholder="Enter Stock Symbol and hit enter" />
                </form>
            </div>
        );
    }
}

export default Search;
