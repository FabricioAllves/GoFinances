import React from "react";
import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'
import { DashBoard } from "./src/pages/DashBoard";
import { Loading } from "./src/components/Loading";


export default function App() {

  const [fontsLoaded] = useFonts({Poppins_400Regular, Poppins_500Medium, Poppins_700Bold});

  if(!fontsLoaded) {
    return <Loading />
  }

  return (
    <ThemeProvider theme={theme}>
      <DashBoard />
    </ThemeProvider>
  );
}

