import './App.css';
import React, { Component } from 'react';

class InputBox extends Component {
    render() {
        return (
            <div className="row">
                <label htmlFor="signup__username">
                    {this.props.label}
                </label>
                <input
                type="text"
                name="username"
                id={this.props.id}
                placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}

export default InputBox;