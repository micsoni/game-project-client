import LoginFormContainer from "./LoginFormContainer";
import { Link } from "react-router-dom";

import React, { Component } from "react";

export default class AllForms extends Component {
  render() {
    if (!this.props.userLoggedIn.jwt) {
      return (
        <div className="form-row">
          <LoginFormContainer />
          <p>Not a member yet?</p>
          <Link to="/signup">join us</Link>
        </div>
      );
    } else {
      return <div>hello</div>;
    }
  }
}
