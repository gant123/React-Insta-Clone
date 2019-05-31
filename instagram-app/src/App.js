import React, { Component } from "react";
import { Alert, Button } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";
import PostsPage from "./Components/PostPage/PostPage";
import Authenticate from "./Components/Authentication/Authenticate";
import LoginPage from "./Components/LoginPage/Login";


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        {/* Need to call PostsPage before modifiying the component aith Authenticate HOC!!! */}
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);