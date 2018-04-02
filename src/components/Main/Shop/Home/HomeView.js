import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
// import Collection from './Collection';
// import Category from './Category';
import TopProduct from './TopProduct';
import Collection from './Collection';
import Category from './Category';

class HomeView extends Component {
    static navigationOptions = { header: null }

    render() {
        const { types } = this.props.navigation.state.params;
        const { wrapper } = styles;
        return (
            <ScrollView style={wrapper}>
                <Collection navigation={this.props.navigation} />
                <Category navigation={this.props.navigation} types={types} />
                <TopProduct navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}

export default HomeView;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#E2E1DF',
    }
});
