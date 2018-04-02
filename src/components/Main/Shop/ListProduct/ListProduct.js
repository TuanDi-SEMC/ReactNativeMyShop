import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import icBack from '../../../../media/appIcon/backList.png';
import imgProduct from '../../../../media/temp/sp1.jpeg';

class ListProduct extends Component {
    static navigationOptions = { header: null }
    goToProductDetail() {
        const { navigate } = this.props.navigation;
        navigate('ProductDetail');
    }
    goBack() {
        this.props.navigation.goBack();
    }
    render() {
        const { container, wrapper, header, imageStyle, priceStyle, materailStyle,
            titleStyle, productContainer, imageContainer, titleProductStyle,
            txtColorStyle, txtShowDetail } = styles;
        return (
            <View style={container}>
                <ScrollView style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={icBack} style={imageStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View style={imageStyle} />
                    </View>
                    <TouchableOpacity onPress={this.goToProductDetail.bind(this)} style={productContainer} >
                        <Image style={imageContainer} source={imgProduct} />
                        <View style={{ justifyContent: 'space-between', flex: 1 }} >
                            <Text style={titleProductStyle}>Lace Sleeve Si</Text>
                            <Text style={priceStyle}>117$</Text>
                            <Text style={materailStyle}>Material Silk</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={txtColorStyle}>Color Royal Blue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity onPress={this.goToProductDetail.bind(this)}>
                                    <Text style={txtShowDetail}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View >
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

export default ListProduct;

const styles = StyleSheet.create({
    titleProductStyle: {
        fontSize: 16,
        color: '#9e9e9e',
    },
    priceStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#C72C78',
    },
    materailStyle: {
        fontSize: 16,
        color: '#000',
    },
    txtColorStyle: {
        fontSize: 16,
        color: '#000',
    },
    txtShowDetail: {
        fontSize: 12,
        color: '#C72C78',
    },
    container: {
        flex: 1,
        backgroundColor: '#E2E1DF',
    },
    wrapper: {
        backgroundColor: '#FFF',
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        elevation: 10,
    },
    header: {
        alignItems: 'center',
        padding: 8,
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageStyle: {
        width: 30,
        height: 30,
    },
    titleStyle: {
        fontSize: 18,
        color: '#C72C78',
    },
    productContainer: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eeeeee',
        marginLeft: 10,
        paddingTop: 10,
        marginRight: 10,
        paddingBottom: 10,
    },
    imageContainer: {
        marginRight: 10,
        width: 90,
        height: (90 * 482) / 361,
    }
});
