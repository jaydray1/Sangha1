import React from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { View } from 'react-native';
import PrayerStack from './PrayerStack';
import OpenApp from './OpenApp';

const RootNavigator = StackNavigator(
    {
    Home: { screen: OpenApp },
    Prayers: { screen: PrayerStack, title: 'Mantras' }
    },
    // {
    //     navigationOptions: {
    //         title: 'Mantras',
    //         headerTintColor: 'blue'
    //     }
    // }
);

export default RootNavigator;