import React from "react";

import { Grid, Paper, Container, Typography } from "@mui/material";

import CounterMui from "src/layouts/dashboard/common/CounterMui";

const Occupancy = () => (
  // const [count, setCount] = useState(1);
  // const handleChange = (event) => {
  //   setCount(Math.max(Number(event.target.value), 1));
  // };
  <Container maxWidth="xxl">
    <Typography sx={{ margin: "25px" }}>OCCUPANCY</Typography>
    <Grid container spacing={2}>
      {/* First row */}
      <Grid item xs={3}>
        <Paper style={{ textAlign: "left" }}>
          <Typography variant="h6">Base Adults</Typography>
        </Paper>
        <Paper style={{ textAlign: "left" }}>
          <Typography variant="body1">
            Ideal number of adults that can be accommodated in this room
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper style={{ padding: 20, textAlign: "center" }}>
          <CounterMui />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper style={{ textAlign: "left" }}>
          <Typography variant="h6">Maximum Adults</Typography>
        </Paper>
        <Paper style={{ textAlign: "left" }}>
          <Typography variant="body1">
            Maximum number of adults that can be accommodated in this room
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={3}>
        <Paper style={{ padding: 20, textAlign: "center" }}>
          {" "}
          <CounterMui />
        </Paper>
      </Grid>

      {/* Second row */}
      <Grid item xs={3}>
        <Paper style={{ textAlign: "left" }}>
          <Typography variant="h6">Number of Max Children</Typography>
        </Paper>
        <Paper style={{ textAlign: "left" }}>
          <Typography variant="body1">
            Mention the maximum number of children who can stay in the room
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper style={{ padding: 20, textAlign: "center" }}>
          <CounterMui />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper style={{ textAlign: "left" }}>
          <Typography variant="h6">
            Maximum Occupancy (adults & children)
          </Typography>
        </Paper>
        <Paper style={{ textAlign: "left" }}>
          <Typography variant="p">
            Mention the total number of adults & children that can be
            accommodated in this room
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper style={{ padding: 20, textAlign: "center" }}>
          <CounterMui />
        </Paper>
      </Grid>
    </Grid>
  </Container>
);

export default Occupancy;
