import { AsyncStorage } from 'react-native';

const getCart = async () => {
    const cartArray = AsyncStorage.getItem('@cart');
    return cartArray ? [] : JSON.parse(cartArray);
};

export { getCart };
