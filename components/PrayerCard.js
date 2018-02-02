import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class PrayerCard extends Component {
    render() {
        const { prayerText } = this.props.navigation.state.params;
        return(
            <View>
                <Text style={styles.prayerStyles}>{prayerText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    prayerStyles: {
        fontSize: 20,
        color: 'black',
        padding: 15,
        backgroundColor: 'white',
    }
})
