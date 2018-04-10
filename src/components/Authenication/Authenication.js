import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, ToastAndroid, AsyncStorage, Alert } from 'react-native';
import { connect } from 'react-redux';

import icLogo from '../../media/appIcon/ic_logo.png';
import icBack from '../../media/appIcon/back_white.png';

import { setIsLogged } from '../../offline/DataOffline';

import { signIn } from '../../networking/Server';

const { width, height } = Dimensions.get('window');
const buttonWidth = (width / 2) - 10;

class Authenication extends Component {

    static navigationOptions = { header: null }

    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true,
            email: null,
            password: null
        };
    }

    goBackToMain() {
        this.props.navigation.goBack();
    }

    login = () => {
        // let email = this.state.email;
        // if (email == null) { ToastAndroid.show('Chưa nhập email', ToastAndroid.SHORT); }
        // let password = this.state.password;
        // if (password == null) { ToastAndroid.show('Chưa nhập password', ToastAndroid.SHORT); }

        this.props.dispatch({ type: 'SET_LOGGED', isLogged: true });
        const rawData = {
            isLogged: true,
        };
        AsyncStorage.setItem('@logged', JSON.stringify(rawData));
    }


    signIn() {
        this.setState({ isSignIn: true });
    }
    signUp() {
        this.setState({ isSignIn: false });
    }

    render() {
        const { row1, icon, title, signInStyle, wrapperButtonLeft, wrapperButton,
            wrapperButtonRight, textInput, textStyle, activeStyle, inactiveStyle } = styles;
        const { isSignIn } = this.state;
        const signUpJSX = (
            <View>
                <TextInput
                    style={textInput}
                    placeholder='Enter your name'
                    underlineColorAndroid='transparent'
                />
                <TextInput
                    style={textInput}
                    placeholder='Enter your email'
                    underlineColorAndroid='transparent'
                />
                <TextInput
                    secureTextEntry={true}
                    style={textInput}
                    placeholder='Enter your password'
                    underlineColorAndroid='transparent'
                />
                <TextInput
                    style={textInput}
                    placeholder='Re-enter your password'
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={this.props.onOpen} style={wrapperButton}>
                    <Text style={textStyle}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const signInJSX = (
            <View>
                <TextInput
                    style={textInput}
                    placeholder='Enter your email'
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    style={textInput}
                    secureTextEntry={true}
                    placeholder='Enter your password'
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => this.setState({ password })}
                />
                <TouchableOpacity onPress={this.login} style={wrapperButton}>
                    <Text style={textStyle}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const mainJSX = isSignIn ? signInJSX : signUpJSX;
        return (
            <View style={{ flex: 1, backgroundColor: '#286728', padding: 10, justifyContent: 'space-between' }}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)} >
                        <Image source={icBack} style={icon} />
                    </TouchableOpacity>
                    <Text style={title} >Wearing a Dress</Text>
                    <Image source={icLogo} style={icon} />
                </View >
                {mainJSX}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={this.signIn.bind(this)} style={wrapperButtonLeft}>
                        <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.signUp.bind(this)} style={wrapperButtonRight}>
                        <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect()(Authenication);

const styles = StyleSheet.create({
    textInput: {
        width: width - 20,
        backgroundColor: '#fff',
        height: 48,
        borderRadius: 24,
        marginBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
    },
    wrapper: {
        padding: 10,
        height: (height / 8),
        backgroundColor: '#286728',
        justifyContent: 'space-around',
    },
    row1: {
        flexDirection: 'row', justifyContent: 'space-between',
    },
    icon: {
        width: 30,
        height: 30,
    },
    title: {
        color: '#ffffff',
        fontSize: 22,
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 16,
    },
    signInStyle: {
        fontSize: 16,
        color: '#286728',
    },
    activeStyle: {
        fontSize: 16,
        color: '#286728',
    },
    inactiveStyle: {
        fontSize: 16,
        color: '#e9e9e9',
    },
    signUpStyle: {
        fontSize: 16,
        color: '#286728',
    },
    wrapperButtonRight: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginRight: 5,
        alignItems: 'center',
        width: buttonWidth,
        height: 48,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        elevation: 10,
    },
    wrapperButtonLeft: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginRight: 2,
        alignItems: 'center',
        width: buttonWidth,
        height: 48,
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        elevation: 10,
    },
    wrapperButton: {
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ffffff',
        alignItems: 'center',
        width: width - 20,
        height: 48,
        borderRadius: 24,
    }
});
