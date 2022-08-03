import React from "react";
import { Grid, Typography, Link } from "@mui/material";

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log("info:", info);
    console.log("error:", error);

    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service

    //TODO:
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Grid
          container
          id="error_catcher_root"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item id="error_catcher_item1">
            <Typography id="error_catcher_typo1" variant="h1">
              500
            </Typography>

            <Typography id="error_catcher_typo2" variant="h2">
              Oops! Something went wrong.
            </Typography>

            <Link id="error_catcher_link" href="/" underline="hover">
              Try again
            </Link>
          </Grid>
        </Grid>
      );
    }
    return this.props.children;
  }
}

export default AppErrorBoundary;
