import React from "react";
import { Themes } from "../utils";

/**
 * ThemeContext store the current theme of the app,which is provided
 * at the /src/App.js using the /src/App.theme.js.
 */
export let ThemeContext = React.createContext({
  name: Themes.default,
  setTheme: () => null,
});
