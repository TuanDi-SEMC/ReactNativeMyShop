import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
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
        const { wrapper } = styles;
        return (
            <RootStack />
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#E2E1DF',
    }
});
