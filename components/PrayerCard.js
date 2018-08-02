import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default class PrayerCard extends Component {
    render() {
        const { prayerText } = this.props.navigation.state.params;
        return(
            <ScrollView>
                <Text style={styles.prayerStyles}>{prayerText}</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    prayerStyles: {
        fontSize: 22,
        color: 'black',
        padding: 15,
        backgroundColor: '#F3ECE2',
    }
})
