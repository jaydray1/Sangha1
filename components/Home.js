import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';
import threeBuddhasPic from '../assets/threeBuddha.png';

import PrayerStack from '../components/PrayerStack';

export default class Home extends Component {
    render() {
        return (
            <ScrollView 
            style={{
                width: 375, 
                backgroundColor: '#FFE4C4',
                paddingLeft: 10,
                paddingRight: 30,
                paddingTop: 50
                }}>
                <Image 
                source={threeBuddhasPic} 
                style={{ 
                    paddingLeft: 100,
                    width: 300, 
                    height: 300, 
                    borderRadius: 800 
                    }} />
                <Text style={prayerStyles.header}>Practice Book</Text>
                <PrayerStack 
                style={[
                    prayerStyles.prayerHeight, 
                    prayerStyles.prayerWidth,
                    prayerStyles.prayerFontSize,
                ]}
                >
                </PrayerStack>
            </ScrollView>
        )
    }
}

const prayerStyles = StyleSheet.create({
    header: {
        textAlign: 'center',
        color: 'blue',
        fontSize: 40,
    },
    prayerHeight: {
        height: 500,
    },
    prayerWidth: {
        width: 350,
    },
    prayerFontSize: {
        fontSize: 70,
    }
});