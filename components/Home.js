import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';
import threeBuddhasPic from '../assets/threeBuddha.png';

import PrayerStack from '../components/PrayerStack';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
            <ScrollView 
            style={{
                backgroundColor: '#FFE4C4',
                paddingLeft: 10,
                paddingRight: 30,
                paddingTop: 50
                }}>
                <Image 
                source={threeBuddhasPic} 
                style={{ 
                    flex: 0,
                    width: 300, 
                    height: 300, 
                    borderRadius: 800
                    }} />
                <Text style={prayerStyles.header}>Practice Book</Text>
                <PrayerStack 
                style={[
                    prayerStyles.prayerHeight, 
                    prayerStyles.prayerFontSize,
                ]}
                >
                </PrayerStack>
                <Footer/>
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
        flex: 1,
    },
    prayerFontSize: {
        fontSize: 70,
    }
});