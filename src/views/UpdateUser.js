import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import UpdateIcon from '@material-ui/icons/Update';
import Container from '@material-ui/core/Container';

import updateUser from '../redux/actions/updateUser';
import Copyright from '../components/footer/Copyright';
import Styles from '../assets/JSS/userManagement/Styles';
import { URL } from "../redux/data/server";

const UpdateUser = ({ user, updateUser }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [npassword, setNpassword] = useState('');
  const [country, setCountry] = useState('');
  const [profile_picture, setProfilePicture] = useState('');
  const classes = Styles();

  async function handleSubmit(event) {
    event.preventDefault();

    if(password.trim().length === 0) {
      alert("You must fill the current password field");
    } else if(password.trim() === npassword.trim()) {
      alert("New password and current password are the same");
    } else if(firstname.trim().length === 0 &&
              lastname.trim().length === 0 &&
              username.trim().length === 0 &&
              npassword.trim().length === 0 &&
              country.trim().length === 0 &&
              profile_picture === null
            ) {
      alert("you need to have at least one field filled in addition to the password");
    } else {
      try {
        var flag = '';
        if(country.trim().length > 0) {
          flag = await axios.get(
            `https://restcountries.eu/rest/v2/name/${country}`
          );
        }
          
        const user_object = await axios.post(URL, {
          query: `
            mutation {
              updateUser(id: "${user._id}", user: {
                firstname: "${firstname.trim()}"
                lastname: "${lastname.trim()}"
                username: "${username.trim()}"
                password: "${password.trim()}"
                new_password: "${npassword.trim()}"
                country: "${country.trim()}"
                profile_picture: "${profile_picture}"
                flag: "${flag.data[0].flag}"
              }) {
                _id
                firstname
                lastname
                username
                country
                profile_picture
                created_at
                flag
              }
            }
          `
        });

        if(user_object.status === 200) {
          console.log(user_object);
          updateUser(user_object.data.data.updateUser);
          alert("User updated");
        }
      } catch(err) {
        console.log(err);
        alert("Ups! some went wrong");
      }
    }
    
    return;
  }
    
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <UpdateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Profile
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              name="firstname"
              label="New Firstname"
              id="email"
              autoComplete="firstname"
              onChange={(e) => setFirstname(e.target.value)}
              fullWidth
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              name="lastname"
              label="New Lastname"
              id="lastname"
              autoComplete="lastname"
              onChange={(e) => setLastname(e.target.value)}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              name="username"
              label="New Username"
              id="username"
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              name="country"
              label="New Country"
              id="country"
              autoComplete="country"
              onChange={(e) => setCountry(e.target.value)}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="password"
              name="npassword"
              label="New Password"
              id="npassword"
              autoComplete="new-password"
              onChange={(e) => setNpassword(e.target.value)}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="password"
              name="password"
              label="Current Password"
              id="password"
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => handleSubmit(e)}
            >
              Update
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => { // get user in the redux store
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({ // update user in the redux store
  updateUser: (newUser) => dispatch(updateUser(newUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser)
