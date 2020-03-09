import React, { Component } from "react";
import { connect } from "react-redux";
import AllForms from "./AllForms";

class Homepage extends Component {
  render() {
    const forms = <AllForms userLoggedIn={this.props.userLoggedIn} />;
    return <div>{forms}</div>;
  }
}
function mapStateToProps(state) {
  return { userLoggedIn: state.user };
}
export default connect(mapStateToProps)(Homepage);
