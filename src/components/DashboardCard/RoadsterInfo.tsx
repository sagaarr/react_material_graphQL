import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { RoadsterInfoState } from "../../utils/interfaces/DashboardInterface";

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
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
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

const RoadsterInfo: React.FC<RoadsterInfoState> = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid item xs={6}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            SpaceX
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Name - {data.roadster.name}
          </Typography>
          <Typography variant="body2" component="p">
            Launch Date -{" "}
            {new Date(data.roadster.launch_date_utc).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }
            )}
          </Typography>
          <Typography variant="body2" component="p">
            Earth distance - {data.roadster.earth_distance_km}
          </Typography>
          <Typography variant="body2" component="p">
            Launch Mass in Kg - {`${data.roadster.launch_mass_kg}`}
          </Typography>
          <Typography paragraph>
            Details - {`${data.roadster.details}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href={data.roadster.wikipedia} target="_blank">
              Wekipida
            </a>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default RoadsterInfo;
