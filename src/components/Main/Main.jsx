import React from "react";
import {
  Grid,
  CardHeader,
  CardContent,
  Typography,
  Card,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";

function Main() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Power by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5rem", marginTop: "20px" }}
        >
          {/* infoCard */}
          Try saying: Add income for $100 in Category Salary for Monday ...
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.CardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Main;
