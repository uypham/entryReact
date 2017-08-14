import React, { Component } from "react";

class InputDemo extends Component {
    render() {
        return (
            <input
                name={this.props.name}
                placeholder={this.props.placeholder}
                type={this.props.type}
            />
        );
    }
}

export default InputDemo;
