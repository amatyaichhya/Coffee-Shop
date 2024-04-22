import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthNavigator} from './routes';

const CoffeeShop = () => {
  return (
    <NavigationContainer>
      {/* {!isLoggedIn ? <AuthNavigator /> : <MainNavigator />} */}
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default CoffeeShop;
