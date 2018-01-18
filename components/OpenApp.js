import React, { Component } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import Button from 'apsl-react-native-button';


import lotusOpen from '../assets/lotus-main.png';
import pinkBackground from '../assets/pinkBackground.jpg';

export default class OpenApp extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return(
            <Image 
            source={pinkBackground}
            style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'cover'
            }}
            >
                <Text 
                style={{
                    fontFamily: 'Macondo-Regular',
                    fontSize: 42,
                    color: 'black',
                    textAlign: 'center',
                    marginTop: 50
                    }} >
                    The Salt Lake Buddhist Fellowship
                    {'\n'}{'\n'}
                    </Text>
                    <Text style={{
                        textAlign: 'center', 
                        fontFamily: 'Muli-Regular',
                        fontSize: 20
                        }} ></Text>
                <Image 
                source={lotusOpen} 
                style={{marginTop: 5, alignSelf: 'center'}}  />
                <Button 
                onPress={() => navigate('Prayers')}
                style={{
                    flex: 0,
                    backgroundColor: 'palevioletred',
                    borderColor: 'purple', 
                    borderWidth: 2, 
                    width: 250, 
                    alignSelf: 'center',
                    marginTop: 60
                }}
                textStyle={{color: 'white'}}
                >
                Welcome Home
                </Button>
            </Image>
        )
    }
}
