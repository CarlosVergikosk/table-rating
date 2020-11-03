import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Rating from '@material-ui/lab/Rating';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#003865",
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

function createData(name, group, cl, st) {
  return { name, group, cl, st };
}

const rows = [
  createData('Amcor PLC', "Business Sector", 1, 1),
  createData('Avery Dennison Corp', "Applied Resources", 3, 3),
  createData('Ball Corp', "Applied Resources", 2, 2),
  createData('Sealed Air Corp', "Applied Resources", 4, 4),
  createData('Internation Paper Co', "Applied Resources", 5, 5),
];

const useStyles = makeStyles({
  table: {
    margin: "1%",
    width: "98%",
  },
  container: {
    width: "90%",
    margin: "5%",
    borderRadius: "25px",
    border: "5px solid #003865",
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell align="center">Industry Group</StyledTableCell>
            <StyledTableCell align="center">Client Match</StyledTableCell>
            <StyledTableCell align="center">Strategy Match</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.group}</StyledTableCell>
              <StyledTableCell align="center"><Rating name="size-medium" defaultValue={row.cl} readOnly/></StyledTableCell>
              <StyledTableCell align="center"><Rating name="size-medium" defaultValue={row.st} readOnly/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
