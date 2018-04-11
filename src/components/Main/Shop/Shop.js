import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { connect } from 'react-redux';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Search from './Search/Search';
import Header from './Header';
import HomeView from './Home/HomeView';

import homeIcon from '../../../media/appIcon/home0.png';
import homeIconS from '../../../media/appIcon/home.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import searchIcon from '../../../media/appIcon/search0.png';
import searchIconS from '../../../media/appIcon/search.png';
import contactIcon from '../../../media/appIcon/contact0.png';
import contactIconS from '../../../media/appIcon/contact.png';

//import TabNavigator from 'react-native-tab-navigator';
//https://github.com/happypancake/react-native-tab-navigator

class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    _setCartArray(newCartArray) {
        this.setState({
            cartArray: newCartArray
        });
    }

    render() {
        const { selectedTab } = this.props;
        const { icon, selectedIcon } = styles;
        return (
            <View style={{ flex: 1, }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <Text>{this.props.myCart}</Text>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.props.dispatch({ type: 'CHANGE_TAB', selectedTab: 'home' })}
                        renderIcon={() => <Image source={homeIcon} style={icon} />}
                        renderSelectedIcon={() => <Image source={homeIconS} style={selectedIcon} />}
                        selectedTitleStyle={{ color: '#286728' }}
                    >
                        {<Home />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.props.dispatch({ type: 'CHANGE_TAB', selectedTab: 'cart' })}
                        renderIcon={() => <Image source={cartIcon} style={icon} />}
                        renderSelectedIcon={() => <Image source={cartIconS} style={selectedIcon} />}
                        selectedTitleStyle={{ color: '#286728' }}
                    // badgeText={this.props.myCart.length}
                    >
                        {<Cart />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.props.dispatch({ type: 'CHANGE_TAB', selectedTab: 'search' })}
                        renderIcon={() => <Image source={searchIcon} style={icon} />}
                        renderSelectedIcon={() => <Image source={searchIconS} style={selectedIcon} />}
                        selectedTitleStyle={{ color: '#286728' }}
                    >
                        {<Search />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.props.dispatch({ type: 'CHANGE_TAB', selectedTab: 'contact' })}
                        renderIcon={() => <Image source={contactIcon} style={icon} />}
                        renderSelectedIcon={() => <Image source={contactIconS} style={selectedIcon} />}
                        selectedTitleStyle={{ color: '#286728' }}
                    >
                        {<Contact />}
                    </TabNavigator.Item>
                </TabNavigator>
            </View >
        );
    }
}
function mapStateToProps(state) {
    return { selectedTab: state.selectedTab };
}
export default connect(mapStateToProps)(Shop);

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        tintColor: '#9e9e9e'
    },
    selectedIcon: {
        width: 20,
        height: 20,
        tintColor: '#286728'
    }
});
