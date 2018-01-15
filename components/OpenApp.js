import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import lotusOpen from '../assets/lotus-main.png';

export default class OpenApp extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <View>
                <Text 
                style={{
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    marginTop: 30
                    }} >
                    The Salt Lake Buddhist Fellowship
                    {'\n'}{'\n'}
                    Welcome Home
                    </Text>
                <Image source={lotusOpen} style={{marginTop: 45, alignSelf: 'center'}}  />
            </View>
        )
    }
}
