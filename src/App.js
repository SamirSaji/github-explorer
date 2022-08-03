import React from "react";
import AppErrorBoundary from "./App.errorBoundary";
import RouterApp from "./router";
import AppTheme from "./App.theme";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <AppErrorBoundary>
      <AppTheme>
        <CssBaseline />
        <RouterApp />
      </AppTheme>
    </AppErrorBoundary>
  );
};
export default App;
