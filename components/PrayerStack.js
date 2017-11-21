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
        const renderedPrayers = prayerModel.map((e, i) => 
        {
            return (e)
        })
        return (
            <ScrollView style={{width: 350}}>
                <Image source={prayerModel[0].imagePath}/>
                <Text>{prayerModel[0].title}</Text>
                <Text>{prayerModel[0].prayerText}</Text>
                <Text className="renderings">
                {
                    renderedPrayers.map((e, i) => {
                        return <Text key={i}>{e.title}{e.prayerText}</Text>
                    })
                }
                </Text>
            </ScrollView>
        )
    }
}


