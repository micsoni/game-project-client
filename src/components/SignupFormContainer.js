import React from "react";
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { signup } from "../store/actions/user";

class SignupFormContainer extends React.Component {
  state = { email: "", password: "", username: "" };
  onSubmit = event => {
    event.preventDefault();
    this.props.signup(
      this.state.email,
      this.state.password,
      this.state.username
    );
    this.props.history.push("/");
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <SignupForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}
export default connect(null, { signup })(SignupFormContainer);
