import React, { FunctionComponent } from 'react';
import { View, Text, StatusBar, Box, HStack, IconButton, Icon, useTheme, Menu, Pressable, HamburgerIcon, Divider } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import ContentLimiter from './ContentLimiter';

interface AppBarProps {

}

const AppBar: FunctionComponent<AppBarProps> = ({ }) => {
    return (
        <>
            <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

            <Box safeAreaTop backgroundColor="#6200ee" />
            <HStack shadow={4} backgroundColor='white' px={1} py={3} justifyContent='space-between' alignItems='center'>
                <ContentLimiter>
                    <HStack space={2} alignItems='center'>
                        <Menu
                            trigger={(triggerProps) => {
                                return (
                                    <Pressable accessibilityLabel="More options menu" {...triggerProps} m={3}>
                                        <Icon size="sm" as={<MaterialIcons name='menu' />} color="#6200ee" />
                                    </Pressable>
                                )
                            }}
                        >
                            <Menu.Item>Arial</Menu.Item>
                            <Menu.Item>Nunito Sans</Menu.Item>
                            <Menu.Item isDisabled>Tahoma</Menu.Item>
                            <Divider />
                            <Menu.Item>Roboto</Menu.Item>
                            <Menu.Item>Montserrat</Menu.Item>
                        </Menu>
                        <Text color="#6200ee" fontSize={20} fontWeight='bold'>Monargot</Text>
                    </HStack>
                    <HStack space={2}>
                        <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="#6200ee" />} />
                        <IconButton icon={<Icon as={<MaterialIcons name='search' />}
                            color="#6200ee" size='sm' />} />
                        <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="#6200ee" />} />
                    </HStack>
                </ContentLimiter>
            </HStack>

        </>
    );
};

export default AppBar;