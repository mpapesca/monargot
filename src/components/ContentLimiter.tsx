import React, { FunctionComponent } from 'react';
import { Box } from 'native-base';
import { StyleSheet } from 'react-native';

interface IContentLimiterProps {
    children: React.ReactNode
}

const ContentLimiter: FunctionComponent<IContentLimiterProps> = (props) => {
    return (
        <Box w="100%" px="15%" alignContent="center">
            {props.children}
        </Box>
    )
};

const styles = StyleSheet.create({});

export default ContentLimiter;