import React, { Component } from 'react';
import { connect } from "react-redux";
import LoginPage from './LoginPage';

class LoginIndex extends Component {
  render() {
    const { user } = this.props;
    console.log(user);

    return (
      <LoginPage user={user}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(LoginIndex);
//export default LoginIndex;
