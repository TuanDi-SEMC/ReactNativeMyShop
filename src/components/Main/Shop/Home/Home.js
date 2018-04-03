import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeView from './HomeView';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';

/*
Home: sẽ là màn hình luôn chạy đầu tiên|func return <RootStack /navigate="KEY_COMPONENT">
*/
const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeView,
        },
        ListProduct: {
            screen: ListProduct,
        },
        ProductDetail: {
            screen: ProductDetail,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

class Home extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}

export default Home;
