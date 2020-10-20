import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Input from '@material-ui/core/Input';

import updateUser from '../redux/actions/updateUser';
import { URL } from "../redux/data/server";

const UpdateUser = ({ user, updateUser }) => {
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const user_object = await axios.post(URL, {
        query: `
          mutation {
            updateUser(id: "${user._id}", user: {
              username: "${}"
              password: "${}"
            }) {
              _id
              firstname
              lastname
              username
              country
              profile_picture
              created_at
            }
          }
        `
      },
      {

      })
    } catch(err) {

    }
  };

  return (
    <div>
      <Input type="file" />
    </div>
  )
}

const mapStateToProps = (state) => { // get user in the redux store
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({ // update user in the redux store
  updateUser: (newUser) => dispatch(updateUser(newUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
