import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import sql1 from '../../../../media/temp/sp1.jpeg';
import sql2 from '../../../../media/temp/sp2.jpeg';
import sql3 from '../../../../media/temp/sp3.jpeg';
import sql4 from '../../../../media/temp/sp4.jpeg';

class TopProduct extends Component {
    render() {
        const { wrapper, body, productContainer, imageContainer, title, price, productName } = styles;
        return (
            <View style={wrapper}>
                <Text style={title}>TOP PRODUCT</Text>
                <View style={body}>
                    <View style={productContainer}>
                        <Image source={sql1} style={imageContainer} />
                        <Text style={productName}>Black of The</Text>
                        <Text style={price}>96$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sql2} style={imageContainer} />
                        <Text style={productName}>Black of The</Text>
                        <Text style={price}>96$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sql3} style={imageContainer} />
                        <Text style={productName}>Black of The</Text>
                        <Text style={price}>96$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sql4} style={imageContainer} />
                        <Text style={productName}>Black of The</Text>
                        <Text style={price}>96$</Text>
                    </View>
                </View>
            </View>
        );
    }
}
export default TopProduct;

const { width } = Dimensions.get('window');
const widthImage = (width - 60) / 2;
const heightImage = (widthImage / 361) * 452;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        margin: 10,
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        marginBottom: 10,
        shadowColor: '#333333',
        shadowOffset: { width: 10, height: 13 },
        shadowOpacity: 1,
        elevation: 5,
    },
    body: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    productContainer: {
        backgroundColor: '#ffffff',
        padding: 5,
        marginBottom: 5,
        marginRight: 5,
        justifyContent: 'center',
        shadowColor: '#333333',
        shadowOffset: { width: 10, height: 13 },
        shadowOpacity: 1,
        elevation: 2,
    },
    imageContainer: {
        width: widthImage,
        height: heightImage,
    },
    title: {
        paddingLeft: 5,
        fontSize: 20,
        marginBottom: 5,
    },
    price: {
        color: 'pink',
        fontWeight: 'bold',
    },
    productName: {
        marginTop: 5,
        marginBottom: 5,
    }
});
