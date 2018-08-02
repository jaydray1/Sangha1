import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
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
                            <View style={styles.drawerItem} key={prayer.id}>
                                <Image 
                                source={require('../assets/gassho.jpg')}
                                style={{width: 50, height: 50, backgroundColor: 'blue', marginLeft: 20}}
                                />
                                    <Text
                                    key={prayer.id}
                                    onPress={()=> this.goToPrayer(prayer)}
                                    style={styles.textItem}
                                    textStyle={{color: 'white'}}
                                    >
                                    {prayer.title}
                                    </Text>
                            </View>
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
        },
    drawerItem: {
        backgroundColor: '#F3ECE2',
        borderStyle: 'solid', 
        borderTopColor: 'black', 
        borderTopWidth: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        marginRight: 15
    },
    textItem: {
        padding: 25, 
        margin: 10, 
        color: 'black',
        fontSize: 20
    }
})