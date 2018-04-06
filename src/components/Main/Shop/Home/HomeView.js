import React, { Component } from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
// import Collection from './Collection';
// import Category from './Category';
import TopProduct from './TopProduct';
import Collection from './Collection';
import Category from './Category';
import { getIndex } from '../../../../networking/Server';

class HomeView extends Component {

    static navigationOptions = { header: null }

    constructor(props) {
        super(props);
        this.state = {
            types: [],
            topProducts: [],
        };
    }

    componentDidMount() {
        getIndex().then((data) => {
            const { type, product } = data;
            this.setState({ types: type, topProducts: product });
        }).catch((error) => {
            Alert.alert(error.toString());
        });
    }

    render() {
        const { wrapper } = styles;
        const { types, topProducts } = this.state;
        return (
            <ScrollView style={wrapper}>
                <Collection navigation={this.props.navigation} />
                <Category navigation={this.props.navigation} types={types} />
                <TopProduct navigation={this.props.navigation} topProducts={topProducts} />
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
