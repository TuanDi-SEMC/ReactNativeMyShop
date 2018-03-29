import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import midiIcon from '../../../../media/temp/midi.jpg';
import miniIcon from '../../../../media/temp/mini.jpg';

const { width, height } = Dimensions.get('window');

class Category extends Component {
    render() {
        const { wrapper, image, title, content } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={title} >LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Swiper>
                        <ImageBackground source={littleIcon} style={image} >
                            <Text style={content}>Little Dress</Text>
                        </ImageBackground>
                        <ImageBackground source={maxiIcon} style={image} >
                            <Text style={content}>Maxi Dress</Text>
                        </ImageBackground>
                        <ImageBackground source={midiIcon} style={image} >
                            <Text style={content}>Midi Dress</Text>
                        </ImageBackground>
                        <ImageBackground source={miniIcon} style={image} >
                            <Text style={content}>Mini Dress</Text>
                        </ImageBackground>
                    </Swiper></View>
            </View>
        );
    }
}

export default Category;
const widthImage = width - 40;
const heightImage = (widthImage / 800) * 400;
const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.3,
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        shadowColor: '#333333',
        shadowOffset: { width: 10, height: 13 },
        shadowOpacity: 1,
        elevation: 5,
    },
    image: {
        justifyContent: 'center',
        width: widthImage,
        height: heightImage,
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 20,
    },
    content: {
        marginBottom: 30,
        fontSize: 20,
    }
});

