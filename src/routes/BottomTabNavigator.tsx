/* eslint-disable react/no-unstable-nested-components */
import React, {FC} from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Colors, CommonStyles} from '@cs/constants';
import {CoffeeListingScreen, EmptyTabsScreen} from '@cs/screens';
import {MainRoutes} from './MainNavigator';
import {MainStackScreenProps} from './types';
import {CartIcon, HeartIcon, HomeIcon, NotificationIcon} from '@cs/assets';

export enum BottomTabRoutes {
  Home = 'Home',
  WishList = 'WishList',
  Cart = 'Cart',
  Notification = 'Notification',
}

export type BottomTabParamsList = {
  [BottomTabRoutes.Home]: undefined;
  [BottomTabRoutes.WishList]: undefined;
  [BottomTabRoutes.Cart]: undefined;
  [BottomTabRoutes.Notification]: undefined;
};

const TabBarBGColor = Colors.white;

const BottomTab = createBottomTabNavigator<BottomTabParamsList>();

const BottomTabNavigator: FC<
  MainStackScreenProps<MainRoutes.BottomTab>
> = ({}) => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          backgroundColor: TabBarBGColor,
        },
        tabBarInactiveTintColor: Colors.darkGray,
        tabBarActiveTintColor: Colors.primary,
      }}>
      <BottomTab.Screen
        name={BottomTabRoutes.Home}
        component={CoffeeListingScreen}
        options={{
          headerTitle: '',
          tabBarIcon: ({color}) => (
            <View
              style={[
                CommonStyles.justifyContentCenter,
                CommonStyles.alignItemsCenter,
              ]}>
              <HomeIcon fill={color} />
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        name={BottomTabRoutes.WishList}
        component={EmptyTabsScreen}
        options={{
          headerTitle: '',
          tabBarIcon: ({color}) => (
            <View
              style={[
                CommonStyles.justifyContentCenter,
                CommonStyles.alignItemsCenter,
              ]}>
              <HeartIcon fill={color} />
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        name={BottomTabRoutes.Cart}
        component={EmptyTabsScreen}
        options={{
          headerTitle: '',
          tabBarIcon: ({color}) => (
            <View
              style={[
                CommonStyles.justifyContentCenter,
                CommonStyles.alignItemsCenter,
              ]}>
              <CartIcon fill={color} />
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        name={BottomTabRoutes.Notification}
        component={EmptyTabsScreen}
        options={{
          headerTitle: '',
          tabBarIcon: ({color}) => (
            <View
              style={[
                CommonStyles.justifyContentCenter,
                CommonStyles.alignItemsCenter,
              ]}>
              <NotificationIcon fill={color} />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
