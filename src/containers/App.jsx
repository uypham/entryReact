import React, { Component } from "react";
import logo from "images/logo.svg";
import FormDemo from "formdemo";
import InputDemo from "inputdemo";
import Clock from "components/clock";
import ButtonClick from "components/buttonclick";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
                <ButtonClick />
                <Clock />
                <FormDemo name="abc">
                    <InputDemo type="text" name="a1" placeholder="hehe...." />
                </FormDemo>
                <div id="abc" className="testimg">
                    <a href="">dmfsdmfdfdf uyl</a>
                    <img src="/img/logo.svg" alt="" />
                </div>
            </div>
        );
    }
}

export default App;
