import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Dimensions } from 'react-native';

import avatar from '../../media/temp/profile.png';

const { width } = Dimensions.get('window');
const buttonWidth = width - 20;

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = { isLogedIn: false };
    }

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

    render() {
        const { wrapper, imageStyle, buttonStyle, container, buttonSignInStyle } = styles;
        const logoutJSX = (
            <View>
                <TouchableOpacity onPress={this.goToAuthenication.bind(this)} style={container}>
                    <Text style={buttonStyle}>Sign in</Text>
                </TouchableOpacity >
            </View>);
        const loginJSX = (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: '#ffffff', fontSize: 16, flex: 1, fontWeight: 'bold' }}>Tang Minh Tuan</Text>
                <View style={{ flex: 2.5 }}>
                    <TouchableOpacity onPress={this.goToOrderHistory.bind(this)} style={container}>
                        <Text style={buttonSignInStyle}>Order History</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={this.goToChangeInfo.bind(this)} style={container}>
                        <Text style={buttonSignInStyle}>Change Info</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={this.goToAuthenication.bind(this)} style={container}>
                        <Text style={buttonSignInStyle}>Sign out</Text>
                    </TouchableOpacity >
                </View>
            </View>);
        const MainJSX = this.state.isLogedIn ? loginJSX : logoutJSX;
        return (
            <View style={wrapper}>
                <Image source={avatar} style={imageStyle} />
                {MainJSX}
            </View >
        );
    }
}

export default Menu;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        borderRightWidth: 5,
        borderRightColor: '#ffffff',
        backgroundColor: '#286728',
        alignItems: 'center',
    },
    imageStyle: {
        marginTop: 20,
        marginBottom: 20,
        width: 100,
        height: 100,
        borderRadius: 40,
    },
    buttonStyle: {
        fontSize: 16,
        color: '#286728',
    },
    container: {
        height: 48,
        width: buttonWidth / 2,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        marginTop: 10,
        paddingLeft: 10,
        backgroundColor: '#ffffff',
        borderRadius: 5,
    },
    buttonSignInStyle: {
        justifyContent: 'center',
        fontSize: 16,
        color: '#29BB9C',
    }
});

