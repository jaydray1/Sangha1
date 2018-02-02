import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Button from 'apsl-react-native-button';
import prayerModel from '../config/prayerModel';

export default class PrayerFeed extends Component {
    goToPrayer = (prayer) => {
        this.props.navigation.navigate('Text', { ...prayer })
    };
    render() {
        return(
           <ScrollView>
            {
                    prayerModel.map((prayer) => {
                        return (
                                <Button
                                key={prayer.id}
                                onPress={()=> this.goToPrayer(prayer)}
                                style={{backgroundColor: 'blue', padding: 25, margin: 10}}
                                textStyle={{color: 'white'}}
                                >
                                {prayer.title}
                                </Button>
                        )
                        
                    })
                
            }   
           </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#008CBA',
        }
})