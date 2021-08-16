import { Box } from "native-base";
import React, { FunctionComponent, ReactNode } from "react";
import AppBar from "../components/AppBar";

interface IBaseScreenProps {
  children?: ReactNode;
}

const BaseScreen: FunctionComponent<IBaseScreenProps> = ({ children }) => {
  return (
    <>
      <AppBar />
      <Box w="100%" px="15%" alignContent="center">
        {children}
      </Box>
    </>
  );
};

export default BaseScreen;
