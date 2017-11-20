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
            <ScrollView>
                <Image 
                source={threeBuddhasPic} 
                style={{ height: 400}} />
                <Text>{this.state.bar}</Text>
                <Text style={styles.header}>Practice Book</Text>
                <PrayerStack></PrayerStack>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        color: 'blue',
        fontSize: 40,
    }
})