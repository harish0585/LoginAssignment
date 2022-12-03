import { Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Grid container textAlign={"center"}>
        <Grid
          item
          style={{ padding: "100px", textAlign: "center", width: "100%" }}
        >
          <Typography variant="h3">
            {`Welcome To Home page ${localStorage.getItem("name")}`}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
