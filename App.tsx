import React from "react";
import { NativeBaseProvider } from "native-base";
import theme from "./src/theme";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
