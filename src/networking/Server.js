import React, { Component } from 'react';
import { Alert } from 'react-native';

async function getIndex() {
    const apiGetIndex = 'http://192.168.50.111/api/';
    try {
        let response = await fetch(apiGetIndex);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        Alert.alert(
            'Kết nối thất bại',
            'error',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }
}

async function searchProduct(key) {
    const apiSearch = `http://192.168.50.111/api/search.php?key=${key}`;
    try {
        let response = await fetch(apiSearch);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        Alert.alert(
            'Kết nối thất bại',
            'error',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }
}

export { searchProduct };

export { getIndex };
