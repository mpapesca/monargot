import { Box, Center, Heading, NativeBaseProvider, Text } from 'native-base';
import React from 'react';

export default function App() {
  return (
    <NativeBaseProvider>
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
            <Heading>Welcome to Monargot!</Heading>
            <Text>I hope we can fix your slang problems!</Text>
          </Center>
        </Box>
      </Center>
    </NativeBaseProvider >
  );
}
