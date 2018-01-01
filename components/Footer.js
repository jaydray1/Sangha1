import React, {Component} from 'react';
import { View } from 'react-native';

export default class Footer extends Component {
    render() {
        return(
            <View style={{
                    flexDirection: 'row',
                    height: 200,
                    backgroundColor: 'red',
                    width: 300
                }}
                />
        )
    }
}