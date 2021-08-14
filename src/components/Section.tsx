import { Box, Heading, Text } from 'native-base';
import React, { FunctionComponent, ReactNode } from 'react';
import { StyleSheet } from 'react-native';

interface ISectionProps {
    title: string,
    children: ReactNode
}

const Section: FunctionComponent<ISectionProps> = (props) => {
    return (
        <Box w="100%" shadow={3} p={4} m={2} rounded="lg">
            <Heading size="md">{props.title}</Heading>
            {props.children}
        </Box>
    );
};

const styles = StyleSheet.create({

});

export default Section;