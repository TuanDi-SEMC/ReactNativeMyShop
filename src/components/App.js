import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Authenication from './Authenication/Authenication.js';
import ChangeInfo from './ChangeInfo/ChangeInfo.js';
import Main from './Main/Main.js';
import OrderHistory from './OrderHistory/OrderHistory.js';

/*
Hide status bar
*/
// StatusBar.setHidden(true);

/*
Home: sẽ là màn hình luôn chạy đầu tiên|func return <RootStack /navigate="KEY_COMPONENT">
*/
const RootStack = StackNavigator(
  {
    Authenication: {
      screen: Authenication,
    },
    ChangeInfo: {
      screen: ChangeInfo,
    },
    Home: {
      screen: Main,
    },
    OrderHistory: {
      screen: OrderHistory,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const defaultState = {
  cart: [],
  isLogged: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CART': return {
      ...state,
      cart: [...state.cart, action.newItem]
    };
    case 'SET_CART': return {
      cart: action.newCart,
      isLogged: state.isLogged,
    };
    case 'SET_LOGGED': return {
      cart: state.cart,
      isLogged: action.isLogged,
    };
    default: return state;
  }
};

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        < RootStack />
      </Provider >
    );
  }
}
