import React, { Component } from "react";

class ButtonDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusClick: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({
            statusClick: !prevState.statusClick
        }));
    }

    render() {
        return (
            <p>
                <a href="#" onClick={this.handleClick}>
                    Click tao nè
                </a>
                <span style={{ color: "red" }}>
                    {this.state.statusClick ? "ON" : "OFF"}
                </span>
            </p>
        );
    }
}

export default ButtonDemo;
