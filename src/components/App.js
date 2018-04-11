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
  product: null,
  search: null,
  selectedTab: 'home',
  searchResult: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_TAB': return {
      ...state,
      selectedTab: action.selectedTab,
    };
    case 'ADD_CART': return {
      ...state,
      arr: [...state.arr, action.product]
    };
    case 'SEARCH': return {
      ...state,
      search: action.search,
    };
    case 'SET_CART': return {
      ...state,
      cart: action.cart,
    };
    case 'SET_LOGGED': return {
      ...state,
      isLogged: action.isLogged,
    };
    case 'SET_PRODUCT': return {
      ...state,
      product: action.newProduct,
    };
    case 'SET_SEARCH_RESULT': return {
      ...state,
      searchResult: action.searchResult,
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
