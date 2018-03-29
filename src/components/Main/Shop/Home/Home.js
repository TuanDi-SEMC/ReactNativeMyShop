import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
// import Collection from './Collection';
// import Category from './Category';
import TopProduct from './TopProduct';
import Collection from './Collection';
import Category from './Category';

class Home extends Component {
    render() {
        const { wrapper } = styles;
        return (
            <ScrollView style={wrapper}>
                <Collection />
                <Category />
                <TopProduct />
            </ScrollView>
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
