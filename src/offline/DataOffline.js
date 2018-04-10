import { AsyncStorage, Alert } from 'react-native';

// 1: logged 0: not log
const isLogged = async () => {
    const data = AsyncStorage.getItem('@cart');
    const rawData = JSON.parse(data);
    Alert.alert(JSON.stringify(rawData));
    return data ? false : rawData.isLogged;
};

const setIsLogged = async (logged) => {
    const data = {
        isLogged: logged,
    };
    Alert.alert(JSON.stringify(data));
    await AsyncStorage.setItem('@cart', JSON.stringify(data));
};

export { setIsLogged };
export { isLogged };
