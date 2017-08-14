import React, { Component } from "react";

class FormDemo extends Component {
    render() {
        return (
            <form method="post" name={this.props.name}>
                <input type="hidden" placeholder="key..." />
                {this.props.children}
            </form>
        );
    }
}

export default FormDemo;
