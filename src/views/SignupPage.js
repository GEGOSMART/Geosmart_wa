import React, { Fragment } from 'react';
import { connect } from "react-redux";

const SignupPage = ({user}) => {
  console.log(user)
  return (
    <Fragment>
      Signup
    </Fragment>
  )
}

const mapStateToProps = (state) => { //get user in the store 
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
