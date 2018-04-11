import React, { Component } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import Drawer from 'react-native-drawer';
import Menu from '../Main/Menu.js';
import Shop from '../Main/Shop/Shop';
import { isLogged } from '../../offline/DataOffline';

import { getCart } from '../../networking/GetCart';
import { connect } from 'react-redux';

//https://github.com/root-two/react-native-drawer

class Main extends Component {
    //Hide defaul navigation bar
    static navigationOptions = { header: null }

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        //get cart from offline
        getCart().then(cart => {
            this.props.dispatch({ type: 'SET_CART', newCart: cart });
        });
        // let rawData = {
        //     isLogged: true,
        // };
        AsyncStorage.getItem('@logged').then(value => {
            if (value == null) {
                this.props.dispatch({ type: 'SET_LOGGED', isLogged: false });
                Alert.alert(JSON.stringify(false));
            } else {
                const data = JSON.parse(value);
                const logged = data.isLogged;
                this.props.dispatch({ type: 'SET_LOGGED', logged });
                Alert.alert(JSON.stringify(logged));
            }
        });
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
                panOpenMask={0.4}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}


export default connect()(Main);
