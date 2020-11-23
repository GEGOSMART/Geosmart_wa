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
import {checkToken} from "../redux/common/checkToken";

import axios from 'axios';

const link = 'http://54.198.239.79:3001/interface/all-courses';

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

const Courses = (props) => {
  const classes = useStyles();
  const [rows, setRows] = useState(0);
  //var rows = [];

  async function getCourses() {
    try {
      const isValid = await checkToken();
      console.log(isValid)
      if(isValid == false){
         return;
      }
      const course_object = await axios.get(link)
      console.log(course_object)
      if (course_object.status === 200) {
        return setRows(course_object.data.data);
      } else {
        alert("Ups! Something went wrong");
      }
    } catch(err) {
      console.error(err)
    }
  };

  useEffect(() => {
    getCourses()
    console.log(rows);
  }, [] );

  var i = 0;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell allign="center">Courses</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows ? rows.map(element =>
            <StyledTableRow key= {i}>
            <StyledTableCell component="th" scope="row">
              {element.data[i]}
            </StyledTableCell>


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

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
