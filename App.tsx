import React from "react";
import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'
import { Loading } from "./src/components/Loading";

import { Register } from "./src/pages/Register";



export default function App() {

  const [fontsLoaded] = useFonts({Poppins_400Regular, Poppins_500Medium, Poppins_700Bold});

  if(!fontsLoaded) {
    return <Loading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}

