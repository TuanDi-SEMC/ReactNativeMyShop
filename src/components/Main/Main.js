import React, { Component } from 'react';
// import { View, Text, Button } from 'react-native';
import Drawer from 'react-native-drawer';
import Menu from '../Main/Menu.js';
import Shop from '../Main/Shop/Shop';

//https://github.com/root-two/react-native-drawer

export default class Main extends Component {
    //Hide defaul navigation bar
    static navigationOptions = { header: null }
    componentDidMount() {
        this.drawer.open();
    }
    closeControlPanel = () => {
        this.drawer.close();
    };

    goToAuthenication() {
        const { navigate } = this.props.navigation;
        navigate('Authenication');
    }

    goToChangeInfo() {
        const { navigate } = this.props.navigation;
        navigate('ChangeInfo');
    }

    goToOrderHistory() {
        const { navigate } = this.props.navigation;
        navigate('OrderHistory');
    }

    openControlPanel = () => {
        this.drawer.open();
    };

    render() {
        return (
            <Drawer
                ref={(ref) => (this.drawer = ref)}
                content={<Menu navigation={this.props.navigation} />}
                openDrawerOffset={0.4}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}
