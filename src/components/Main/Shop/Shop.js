import React, { Component } from 'react';
import { View, } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Search from './Search/Search';
import Header from './Header';

//import TabNavigator from 'react-native-tab-navigator';
//https://github.com/happypancake/react-native-tab-navigator

class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedTab: 'home' };
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                    >
                        {<Home />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                    >
                        {<Cart />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'search' })}
                    >
                        {<Search />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                    >
                        {<Contact />}
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

export default Shop;