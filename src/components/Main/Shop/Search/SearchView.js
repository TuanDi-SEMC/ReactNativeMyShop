import React, { Component } from 'react';
import {
    StyleSheet, Text, TouchableOpacity, ListView, View, Image, Dimensions, Alert, FlatList
} from 'react-native';

import { searchProduct } from '../../../../networking/Server';

const url = 'http://192.168.50.111/api/images/product/';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class SearchView extends Component {
    static navigationOptions = { header: null }

    constructor(props) {
        super(props);
        this.state = { listProduct: [] };
    }

    componentDidMount() {
        searchProduct('floral').then((data) => {
            this.setState({ listProduct: data });
        }).catch((error) => {
            Alert.alert(error.toString());
        });
    }

    goToProductDetail(item) {
        const { navigate } = this.props.navigation;
        navigate('ProductDetail', item);
    }

    render() {
        const { wrapper, productContainer, imageContainer, nameProduct,
            productDesciption, priceProduct, materialProduct, colorProduct } = styles;
        return (
            <View style={wrapper}>
                <FlatList
                    data={this.state.listProduct}
                    renderItem={
                        ({ item }) =>
                            <TouchableOpacity onPress={this.goToProductDetail.bind(this, item)}>
                                <View style={productContainer}>
                                    <Image source={{ uri: `${url}${item.images[0]}` }} style={imageContainer} />
                                    <View style={productDesciption}>
                                        <Text style={nameProduct}>{toTitleCase(item.name)}</Text>
                                        <Text style={priceProduct}>{item.price}$</Text>
                                        <Text style={materialProduct}>{item.material}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={colorProduct}>Color </Text>
                                            <Text style={colorProduct}>{item.color}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                    }
                />
            </View>
        );
    }
}


const { width } = Dimensions.get('window');
const widthImage = (width - 60) / 2;
const heightImage = (widthImage / 361) * 452;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10,
        backgroundColor: '#E2E1DF',
    },
    productContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        elevation: 5,
        padding: 5,
        width: '100%',
        marginBottom: 10,
        height: 120,
    },
    imageContainer: {
        height: '100%',
        width: 100,
        resizeMode: 'contain',
    },
    nameProduct: {
        fontSize: 16,
    },
    productDesciption: {
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    priceProduct: {
        fontSize: 16,
        color: '#C72C78',
        fontWeight: 'bold',
    },
    materialProduct: {
        fontSize: 15,
    },
    colorProduct: {
        fontSize: 15,
    }
});

export default SearchView;
