// based on https://material-ui.com/getting-started/templates/sign-in-side/

import React, { useState } from 'react';
import { connect } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/Geosmartlogo.png';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    background: 'blue',
    border: 'black',
    'border-width': 'medium',
    'margin-top': '80px',
    background: 'rgba(255, 255, 255, 0.8)',
    'border-radius': '20px'
  },
  item: {
    // background: 'red',
    width: '100%',
    background: 'blue',
    'textAlign': 'center',
    'borderRadius': '5px',
    'marginTop': '220px'
  },
  center: {
    display: 'center',
    justifyContent: 'center',
    'marginLeft': '700px',
    width: '250px'
  },
}));

const HomePage = () => {

  const classes = useStyles();
  return (
    <Grid
    className={classes.container}
    direction="column"
    spacing={2}
  >
    <Grid
      item
      sm={12}
      className={classes.item}
    >
      
    <div className ={classes.center}>
        <img src={logo} alt="Logo"  />
    </div>
    </Grid>
  </Grid>
  );
};

const mapStateToProps = (state) => { //get user in the store 
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);