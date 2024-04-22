import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from '@cs/screens';
import {MainNavigator} from './index';

export enum AuthRoutes {
  Login = 'Login',
  Main = 'Main',
}

export type AuthStackParamsList = {
  [AuthRoutes.Login]: undefined;
  [AuthRoutes.Main]: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamsList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <AuthStack.Screen name={AuthRoutes.Login} component={LoginScreen} />

      <AuthStack.Screen name={AuthRoutes.Main} component={MainNavigator} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
