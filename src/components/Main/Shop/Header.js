import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions, Image, TextInput, StyleSheet, Alert
} from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtSearch: ''
        };
    }

    onSearch() {
        const { txtSearch } = this.state;
        // this.setState({ txtSearch: '' });
        // search(txtSearch)
        //     .then(arrProduct => global.setArraySearch(arrProduct))
        //     .catch(err => console.log(err));
        Alert.alert(txtSearch);
    }
    render() {
        const { wrapper, row1, textInput, icon, title } = styles;
        return (
            <View style={wrapper} >
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={icon} />
                    </TouchableOpacity>
                    <Text style={title} >Wearing a Dress</Text>
                    <Image source={icLogo} style={icon} />
                </View >
                <TextInput
                    style={textInput}
                    placeholder='What do you want to buy?'
                    value={this.state.txtSearch}
                    onChangeText={text => this.setState({ txtSearch: text })}
                    underlineColorAndroid='transparent'
                    onSubmitEditing={this.onSearch.bind(this)}
                />
            </View>
        );
    }
}
export default Header;

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        height: height / 8,
        backgroundColor: '#286728',
        justifyContent: 'space-around'
    },
    row1: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    textInput: {
        height: height / 23,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingTop: 0,
        paddingBottom: 0,
    },
    icon: {
        width: 25,
        height: 25,
    },
    title: {
        color: '#fff',
        fontSize: 18,
    }
});
