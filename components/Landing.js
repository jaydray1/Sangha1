import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

const Landing = ({navigation}) => (
    <View style={{
        backgroundColor: 'red',
        flex: 0.5, 
        alignItems: 'center', 
        justifyContent: 'center'
}} >
<Text>Landing Page/ Home Page</Text>
<Button
onPress={() => navigation.navigate('Landing')}
title='Go To Prayers'
/>

</View>

)

export default Landing