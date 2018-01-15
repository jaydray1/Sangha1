import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';
import PrayerStack from './PrayerStack';
import OpenApp from './OpenApp';

const RootNavigator = StackNavigator({
    Home: { screen: OpenApp },
    Prayers: { screen: PrayerStack }
});

export default RootNavigator;