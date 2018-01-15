import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';
import PrayerStack from './PrayerStack';
import Landing from './Landing';

const RootNavigator = StackNavigator({
    Home: { 
        screen: Landing,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Prayers: { 
        screen: PrayerStack,
        navigationOptions: {
            headerTitle: 'Prayers',
        },
    },
});

export default RootNavigator;