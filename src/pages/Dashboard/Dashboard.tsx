import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  COMPANY_INFO,
  ROADSTER_QUERY,
} from "../../utils/Https/query/dashboardQuery";
import { useQuery } from "@apollo/client";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import CompanyInfo from "../../components/DashboardCard/CompanyInfo";
import RoadsterInfo from "../../components/DashboardCard/RoadsterInfo";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    display: "flex",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(COMPANY_INFO);
  const roadsterQuery = useQuery(ROADSTER_QUERY);

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <main className={classes.content}>
            {loading ? (
              <CircularProgress />
            ) : error ? (
              <h1>{error}</h1>
            ) : (
              <CompanyInfo data={data} />
            )}

            {roadsterQuery.loading ? (
              <CircularProgress />
            ) : roadsterQuery.error ? (
              <h1>{error}</h1>
            ) : roadsterQuery.data ? (
              <RoadsterInfo data={roadsterQuery.data} />
            ) : (
              <h1>Something went wrong</h1>
            )}
          </main>
        </Grid>
      </Container>
    </>
  );
}
