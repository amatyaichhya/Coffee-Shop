import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthNavigator, MainNavigator} from './routes';
import {useAppSelector} from './hooks';

const CoffeeShop = () => {
  const {isLoggedIn} = useAppSelector(state => state.auth);

  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
};

export default CoffeeShop;
