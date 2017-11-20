import React, { Component } from 'react';
import prayerModel from '../models/prayerModel';
import { SectionList, ScrollView, StyleSheet, Text, Image } from 'react-native';    

export default class PrayerStack extends Component {
    constructor() {
        super();

        this.state = {
            prayerModel
        }
    }
    render() {
        return (
            <ScrollView style={{height: 200, width: 300}}>
                <Image source={prayerModel[0].imagePath}/>
                <Text>{prayerModel[0].title}</Text>
                <Text>{prayerModel[0].prayerText}  </Text>
                <Text>Load</Text>
            </ScrollView>
        )
    }
}


