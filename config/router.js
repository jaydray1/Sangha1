import React from 'react';
import { StackNavigator } from 'react-navigation';

import PrayerCard from '../components/PrayerCard';
import PrayerFeed from '../components/PrayerFeed';

export const Root = StackNavigator({
    Prayers: { 
        screen: PrayerFeed, 
        title: ({ state }) => `${state.params.title}`,
    },
    Text: {
        screen: PrayerCard
    }
    },
    {
        navigationOptions: {
            headerTitle: 'Come As You Are'
        }
    }
);

export default Root;