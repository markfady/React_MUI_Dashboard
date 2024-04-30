import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./routes/AppRouter.tsx";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const Root = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
