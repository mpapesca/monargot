import { Box, Center, Heading, NativeBaseProvider, Text, Image } from 'native-base';
// import { Image } from 'react-native';
import React from 'react';
import AppBar from './src/components/AppBar';
import logo from './assets/logo-1.png';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppBar />
      <Center flex={1}>
        <Box p={9}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: "white",
          }}
          shadow={5}
          rounded="lg"
        >
          <Center>
            <Image
              source={logo}
              alt="Monargot Logo"
              size={"xl"}
              rounded="lg"
            />
            <Heading>Welcome to Monargot!</Heading>
            <Text>I hope we can fix your slang problems!</Text>
          </Center>
        </Box>
      </Center>
    </NativeBaseProvider >
  );
}
