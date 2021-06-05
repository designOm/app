import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "./theme";
import { LightDarkThemeContext } from "./context/LightDarkThemeContext";

const Application = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const value = useMemo(() => ({ isDarkTheme, setDarkTheme }), [isDarkTheme, setDarkTheme]);

  return (
    <LightDarkThemeContext.Provider value={value}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
    </LightDarkThemeContext.Provider>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
