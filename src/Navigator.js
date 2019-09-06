// import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Agenda from './screens/Agenda';
import Auth from './screens/Auth';

const MainRouts = createSwitchNavigator(
    {
        Auth: {
            name: 'Auth',
            screen: Auth
        },
        Home: {
            name: 'Home',
            screen: Agenda
        },
    },
    {
        initialRouteName: 'Auth'
    }
);

const MainNavigator = createAppContainer(MainRouts)
export default MainNavigator;
