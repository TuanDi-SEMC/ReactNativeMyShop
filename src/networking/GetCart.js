import { AsyncStorage } from 'react-native';

const getCart = async () => {
    const cartArray = AsyncStorage.getItem('@cart');
    return cartArray ? [] : cartArray;
};

export { getCart };
