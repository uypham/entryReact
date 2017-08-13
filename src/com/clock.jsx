import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

export default Clock;

function FormattedDate(props) {
    return (
        <h2>
            It is {props.date.toLocaleTimeString()}.
        </h2>
    );
}
