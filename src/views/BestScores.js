// based on https://material-ui.com/getting-started/templates/sign-in-side/

import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";

import axios from 'axios';
import { URL } from "../redux/data/server";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const BestScore = () => {
  const classes = useStyles();
  const [rows, setRows] = useState(0);
  //var rows = [];

  async function getScores() {
    try {
      const score_object = await axios.post(URL, {
        query: `
         query{
           bestScoreByGame(ID_Game: "1"){
             ID
             ID_User
             Score
             DatePlayed
             ID_Game
           }
         }

       `
      })

      if (score_object.status === 200) {
        return setRows(score_object.data.data.bestScoreByGame);
      } else {
        alert("Ups! Something went wrong");
      }
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getScores()
    console.log(rows);
  }, [] )


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell align="right">Score</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Game</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows ? rows.map(element =>
            <StyledTableRow key={element.ID}>
            <StyledTableCell component="th" scope="row">
              {element.ID}
            </StyledTableCell>
            <StyledTableCell align="right">{element.ID_User}</StyledTableCell>
            <StyledTableCell align="right">{element.Score}</StyledTableCell>
            <StyledTableCell align="right">{element.DatePlayed}</StyledTableCell>
            <StyledTableCell align="right">{element.ID_Game}</StyledTableCell>
          </StyledTableRow>) : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => { //get user in the store
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BestScore);
