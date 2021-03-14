import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// TODO - Implement Login Screen
// * Login button should be disabled until both username/password are entered
// * Login button is disabled after being clicked, displaying "Loading..."
// * After the fake API call returns, display error messages
// * Clicking the login button again removes the errors and proceeds to homepage
// TODO - Implement Homepage
// * Displays a welcome message with the username of the logged in individual

ReactDOM.render(<App />, document.getElementById("root"));
