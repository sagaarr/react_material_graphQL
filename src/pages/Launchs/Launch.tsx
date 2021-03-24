import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/client";
import { PAST_LAUNCHES } from "../../utils/Https/query/launchQuery";
import { CircularProgress } from "@material-ui/core";
import { LaunchRecord } from "../../utils/interfaces/LaunchInterface";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "Id", width: 70 },
  { field: "launch_date_utc", headerName: "Launch Date", width: 150 },
  { field: "mission_name", headerName: "Mission Name", width: 150 },
  { field: "site_name", headerName: "Launch Site", width: 150 },
  { field: "rocket_name", headerName: "Rocket Name", width: 150 },
  { field: "launch_success", headerName: "Sucessful", width: 150 },
];

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Launch: React.FC = () => {
  const { loading, error, data } = useQuery(PAST_LAUNCHES, {
    variables: { limit: 50 },
  });

  const [launchList, setLaunchList] = useState<LaunchRecord[]>([]);

  useEffect(() => {
    if (data) {
      let launchDataList: LaunchRecord[] = [];

      for (let i = 0; i < data.launchesPast.length; i++) {
        launchDataList.push({
          id: data.launchesPast[i].id,
          launch_date_utc: new Date(
            data.launchesPast[i].launch_date_utc
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          launch_success: data.launchesPast[i].launch_success,
          mission_name: data.launchesPast[i].mission_name,
          rocket_name: data.launchesPast[i].rocket.rocket_name,
          site_name: data.launchesPast[i].launch_site.site_name,
        });
      }

      setLaunchList([...launchDataList]);
    }
  }, [data]);

  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <div style={{ height: 425, width: "100%" }}>
          {loading ? (
            <CircularProgress />
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <DataGrid
              rows={launchList}
              columns={columns}
              pageSize={5}
              onPageChange={(value) => console.log(value)}
            />
          )}
        </div>
      </Grid>
    </Container>
  );
};

export default Launch;
