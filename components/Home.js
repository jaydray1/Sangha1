import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';
import threeBuddhasPic from '../assets/threeBuddha.png';

import PrayerStack from '../components/PrayerStack';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            bar: 'testing testing'
        }
    }
    render() {
        return (
            <ScrollView style={prayerStyles.scrollWidth}>
                <Image 
                source={threeBuddhasPic} 
                style={{ height: 400}} />
                <Text>{this.state.bar}</Text>
                <Text style={prayerStyles.header}>Practice Book</Text>
                <PrayerStack 
                style={[prayerStyles.prayerHeight, prayerStyles.prayerWidth]}
                >
                </PrayerStack>
            </ScrollView>
        )
    }
}

const prayerStyles = StyleSheet.create({
    header: {
        color: 'blue',
        fontSize: 40,
    },
    prayerHeight: {
        height: 500,
    },
    prayerWidth: {
        width: 350,
    },
    scrollWidth: {
        width: 350,
    },
});