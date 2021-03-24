import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useQuery } from "@apollo/client";
import { ROCKET_QUERY } from "../../utils/Https/query/RocketsQuery";
import { CircularProgress } from "@material-ui/core";
import { RocketData } from "../../utils/interfaces/RocketsInterface";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Rockets: React.FC = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(ROCKET_QUERY, {
    variables: 30,
  });

  console.log(data);
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Mass</TableCell>
                <TableCell align="right">Cost/Launch</TableCell>
                <TableCell align="right">Stages</TableCell>
                <TableCell align="right">Success Rate</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <CircularProgress />
              ) : error ? (
                <h1>{error}</h1>
              ) : (
                data.rockets.map((row: RocketData) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.mass.kg}</TableCell>
                    <TableCell align="right">{row.cost_per_launch}</TableCell>
                    <TableCell align="right">{row.stages}</TableCell>
                    <TableCell align="right">{row.success_rate_pct}</TableCell>
                    <TableCell align="right">
                      {row.active ? "Active" : "Inactive"}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
};

export default Rockets;
