import React, { Component } from 'react';
import { } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ProductDetail from '../ProductDetail/ProductDetail';
import SearchView from './SearchView';

const RootStack = StackNavigator(
    {
        Home: {
            screen: SearchView,
        },
        ProductDetail: {
            screen: ProductDetail,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

class Search extends Component {
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

export default Search;

