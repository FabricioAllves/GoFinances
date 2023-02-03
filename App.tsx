import React from "react";
import { ThemeProvider } from 'styled-components'

import theme from './src/global/styles/theme'
import { DashBoard } from "./src/pages/DashBoard";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <DashBoard />
    </ThemeProvider>
  );
}

