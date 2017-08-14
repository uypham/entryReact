import React from "react";
import ReactDOM from "react-dom";
import "./containers/index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

// var element = React.createElement("h1", { className: 'greeting' }, 'Hello, world!');
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
