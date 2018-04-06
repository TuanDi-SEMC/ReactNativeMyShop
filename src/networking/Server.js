import React, { Component } from 'react';
import { Alert } from 'react-native';

const apiGetIndex = 'http://192.168.50.111/api/';
async function getIndex() {
    try {
        let response = await fetch(apiGetIndex);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        Alert.alert(
            'Alert Title',
            'Kết nối thất bại',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }
}

export { getIndex };
