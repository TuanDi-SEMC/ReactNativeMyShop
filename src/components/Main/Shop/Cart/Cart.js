import React, { Component } from 'react';
import { } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';

const RootStack = StackNavigator(
    {
        Home: {
            screen: CartView,
        },
        ProductDetail: {
            screen: ProductDetail,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

class Cart extends Component {
    goToProductDetail() {
        const { navigate } = this.props.navigation;
        navigate('ProductDetail');
    }
    render() {
        return (
            <RootStack />
        );
    }
}

export default Cart;

