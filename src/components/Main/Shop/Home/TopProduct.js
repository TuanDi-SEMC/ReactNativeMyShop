import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, Dimensions, TouchableOpacity,
    FlatList
} from 'react-native';

const url = 'http://192.168.50.111/api/images/product/';

class TopProduct extends Component {
    goToProductDetail(item) {
        const { navigate } = this.props.navigation;
        navigate('ProductDetail', item);
    }

    render() {
        const { topProducts } = this.props;
        const { wrapper, body, productContainer, imageContainer, title, price, productName } = styles;
        return (
            <View style={wrapper}>
                <Text style={title}>TOP PRODUCT</Text>
                <View style={body}>
                    <FlatList
                        contentContainerStyle={styles.grid}
                        numColumns={2}
                        data={topProducts}
                        renderItem={
                            ({ item }) =>
                                <TouchableOpacity style={productContainer} onPress={this.goToProductDetail.bind(this, item)}>
                                    <Image source={{ uri: `${url}${item.images[0]}` }} style={imageContainer} />
                                    <Text style={productName}>{item.name.toUpperCase()}</Text>
                                    <Text style={price}>{item.price}$</Text>
                                </TouchableOpacity>
                        }
                    />
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
