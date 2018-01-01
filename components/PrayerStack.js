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
            return e
        })
        return (
            <ScrollView>
                <Text className="renderings">
                {
                    renderedPrayers.map((e, i) => {
                        return (
                        <Text key={i}>
                            {/* <Image 
                            source={e.imagePath} 
                            style={{
                                borderRadius: 500,
                                height: 400
                            }} 
                            /> */}
                        {'\n'}{'\n'}
                            <Text style={{
                                fontWeight: 'bold', 
                                fontSize: 20
                            }}
                                >{e.title}</Text>
                        {'\n'}{'\n'}
                            <Text style={{fontSize: 20}}  >{e.prayerText}</Text>
                        </Text>
                    )
                    })
                }
                </Text>
            </ScrollView>
        )
    }
}


