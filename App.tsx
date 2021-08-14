import React, { useState } from 'react';
import { Box, Center, NativeBaseProvider, Input, Container, Text, Heading } from 'native-base';
import AppBar from './src/components/AppBar';
import theme from './src/theme';
import Section from './src/components/Section';
import RecentlyAdded from './src/components/sections/RecentlyAdded';
import LeaderBoard from './src/components/sections/LeaderBoard';

export default function App() {

  const [searchText, setSearchText] = useState('');

  return (
    <NativeBaseProvider theme={theme}>
      <AppBar />
      <Box w="100%" px="15%" alignContent="center">
        <RecentlyAdded />
        <LeaderBoard />
      </Box>
    </NativeBaseProvider >
  );
}
