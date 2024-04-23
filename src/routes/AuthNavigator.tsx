import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '@cs/screens';
import {Colors} from '@cs/constants';

export enum AuthRoutes {
  Login = 'Login',
  Main = 'Main',
}

export type AuthStackParamsList = {
  [AuthRoutes.Login]: undefined;
  [AuthRoutes.Main]: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamsList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        navigationBarColor: Colors.black,
      }}>
      <AuthStack.Screen name={AuthRoutes.Login} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
