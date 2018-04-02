import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import sql1 from '../../../../media/temp/sp1.jpeg';
import sql2 from '../../../../media/temp/sp2.jpeg';
import sql3 from '../../../../media/temp/sp3.jpeg';
import sql4 from '../../../../media/temp/sp4.jpeg';

class TopProduct extends Component {
    goToProductDetail() {
        const { navigate } = this.props.navigation;
        navigate('ProductDetail');
    }

    render() {
        const { wrapper, body, productContainer, imageContainer, title, price, productName } = styles;
        return (
            <View style={wrapper}>
                <Text style={title}>TOP PRODUCT</Text>
                <View style={body}>
                    <TouchableOpacity style={productContainer} onPress={this.goToProductDetail.bind(this)}>
                        <Image source={sql1} style={imageContainer} />
                        <Text style={productName}>Black of The</Text>
                        <Text style={price}>96$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={this.goToProductDetail.bind(this)}>
                        <Image source={sql2} style={imageContainer} />
                        <Text style={productName}>Black of The</Text>
                        <Text style={price}>96$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={this.goToProductDetail.bind(this)}>
                        <Image source={sql3} style={imageContainer} />
                        <Text style={productName}>Black of The</Text>
                        <Text style={price}>96$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={this.goToProductDetail.bind(this)}>
                        <Image source={sql4} style={imageContainer} />
                        <Text style={productName}>Black of The</Text>
                        <Text style={price}>96$</Text>
                    </TouchableOpacity>
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
        color: '#C72C78',
        fontWeight: 'bold',
    },
    productName: {
        marginTop: 5,
        marginBottom: 5,
    }
});
