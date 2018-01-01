import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';

const RootNavigator = StackNavigator({
    Home: { 
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Prayers: { 
        screen: PrayersScreen,
        navigationOptions: {
            headerTitle: 'Prayers',
        },
    },
});

export default RootNavigator;