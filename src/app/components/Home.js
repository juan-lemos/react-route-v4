import React from "react";
import PropTypes from 'prop-types';

function aa(value) {
    { value }
}

export class Home extends React.Component {
    render() {
        let jedi = {
            name: 'yoda',
            height: '66cms',
            mass: '17 kgs'
        };
        Object.keys(jedi).forEach(function (key) {

            console.log(jedi[key]);

        });
        var text = "Something";
        return (
            <div>
                <p>In a new Component!</p>
                <p>{text}</p>
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
                <p>User Object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr />
                 {React.Children.map(this.props.children, child =>
                    [child]
                    )
                }  

                {React.Children.toArray(this.props.children).map(child => [child.key])}

                {React.Children.toArray(this.props.children).filter(function(child){ 
                    return child.key === ".$val1"}
                    )}


            </div>
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.any.isRequired
};