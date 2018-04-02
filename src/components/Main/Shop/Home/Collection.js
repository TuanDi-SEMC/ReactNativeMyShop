import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import banner from '../../../../media/temp/banner.jpg';

const { width, height } = Dimensions.get('window');

class Collection extends Component {

    goToListProduct() {
        const { navigate } = this.props.navigation;
        navigate('ListProduct');
    }

    render() {
        const { wrapper, image, title } = styles;
        return (
            <View style={wrapper}>
                <Text style={title} >SPRING COLLECTION</Text>
                <TouchableOpacity style={image} onPress={this.goToListProduct.bind(this)}>
                    <Image source={banner} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default Collection;
const widthImage = width - 40;
const heightImage = (widthImage / 933) * 465;
const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.3,
        backgroundColor: '#fff',
        margin: 10,
        paddingRight: 10,
        padding: 10,
        shadowColor: '#333333',
        shadowOffset: { width: 10, height: 13 },
        shadowOpacity: 1,
        elevation: 5,
    },
    image: {
        flex: 4,
        width: widthImage,
        height: heightImage,
    },
    title: {
        flex: 1,
        fontSize: 20,
    }
});
