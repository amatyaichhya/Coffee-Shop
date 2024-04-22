import React, {useCallback} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {HeaderBackButton} from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {CoffeeDetailScreen} from '@cs/screens';
import {AppFonts, hs, vs} from '@cs/constants';
import {BottomTabNavigator} from './index';
import {HeartOutlineIcon} from '@cs/assets';

export enum MainRoutes {
  CoffeeDetail = 'Detail',
  BottomTab = 'BottomTab',
}

interface CoffeeDetailRouteParams {
  id: any;
}

export type MainStackParamsList = {
  [MainRoutes.CoffeeDetail]: CoffeeDetailRouteParams | undefined;
  [MainRoutes.BottomTab]: undefined;
};

const MainStack = createStackNavigator<MainStackParamsList>();

const MainNavigator = () => {
  const renderBackArrow = useCallback(
    (props: any) => (
      <Icon name="angle-left" size={24} color={props.tintColor} />
    ),
    [],
  );

  const renderCHeaderBackButton = useCallback(
    (props: any) => (
      <HeaderBackButton
        {...props}
        backImage={() => renderBackArrow(props)}
        style={STYLES.headerLeftStyles}
      />
    ),
    [renderBackArrow],
  );

  const renderHeaderRightButton = useCallback(
    () => (
      <Pressable style={STYLES.headerRightStyles}>
        <HeartOutlineIcon />
      </Pressable>
    ),
    [],
  );

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}>
      <MainStack.Screen
        name={MainRoutes.BottomTab}
        options={{headerShown: false}}
        component={BottomTabNavigator}
      />

      <MainStack.Screen
        name={MainRoutes.CoffeeDetail}
        component={CoffeeDetailScreen}
        options={{
          headerLeft: props => renderCHeaderBackButton(props),
          headerTitleAlign: 'center',
          presentation: 'modal',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerRight: () => renderHeaderRightButton(),
          headerTitleStyle: STYLES.headerTitleStyles,
        }}
      />
    </MainStack.Navigator>
  );
};

const STYLES = StyleSheet.create({
  headerLeftStyles: {
    paddingLeft: hs.w8,
  },
  headerRightStyles: {
    paddingRight: hs.w8,
  },
  headerTitleStyles: {
    fontFamily: AppFonts.SoraSemiBold,
    fontSize: vs.h16,
  },
});

export default MainNavigator;
