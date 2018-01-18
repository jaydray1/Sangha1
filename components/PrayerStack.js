import React, { Component } from 'react';
import prayerModel from '../models/prayerModel';
import { SectionList, ScrollView, StyleSheet, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';   

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
            <ScrollView style={{paddingLeft: 5, paddingRight: 5, backgroundColor: 'white'}}>
                <Animatable.Text className="renderings" animation="fadeIn" >
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
                                fontSize: 20,
                                fontFamily: 'Muli-Regular',
                                color: 'black'
                            }}
                                >{e.title}</Text>
                        {'\n'}{'\n'}
                            <Text style={{
                                fontSize: 20, 
                                fontFamily: 'Muli-Regular', 
                                color: 'black',
                                paddingLeft: 10
                                }}  >{e.prayerText}</Text>
                        </Text>
                    )
                    })
                }
                </Animatable.Text>
            </ScrollView>
        )
    }
}


