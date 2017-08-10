import React from 'react';
import {withRouter} from "react-router-dom";

export class User extends React.Component {
    constructor(props) {
        super();
    }

    onNavigateHome() {
        console.log(this);
        this.props.history.push("/home");
    }

    render() {
        console.log(this.props.history);
        return (
            <div>
                <h3>The User Page</h3>
                <p>User Id: {this.props.match.params.id}</p>
                <button onClick={this.onNavigateHome.bind(this)} className="btn btn-primary">Go Home</button>
            </div>
        )
    }
}