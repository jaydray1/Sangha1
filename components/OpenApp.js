import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Button from 'apsl-react-native-button';

import lotusOpen from '../assets/lotus-main.png';

export default class OpenApp extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text 
                style={{
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    marginTop: 100
                    }} >
                    The Salt Lake Buddhist Fellowship
                    {'\n'}{'\n'}
                    Welcome Home
                    </Text>
                <Image 
                source={lotusOpen} 
                style={{marginTop: 45, alignSelf: 'center'}}  />
                <Button 
                onPress={() => navigate('Prayers')}
                style={{
                    borderColor: 'purple', 
                    borderWidth: 2, 
                    width: 150, 
                    alignSelf: 'center',
                    marginTop: 75
                }}
                >
                Breathe
                </Button>
            </View>
        )
    }
}
