import React, {useCallback} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {HeaderBackButton} from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {CoffeeDetailScreen} from '@cs/screens';
import {AppFonts, Colors, vs} from '@cs/constants';
import {BottomTabNavigator} from './index';
import {HeartOutlineIcon} from '@cs/assets';

export enum MainRoutes {
  CoffeeDetail = 'Detail',
  BottomTab = 'BottomTab',
}

export interface Coffee {
  id: number;
  imageUrl: string;
  name: string;
}

interface CoffeeDetailRouteParams {
  item: Coffee;
}

export type MainStackParamsList = {
  [MainRoutes.CoffeeDetail]: CoffeeDetailRouteParams | undefined;
  [MainRoutes.BottomTab]: undefined;
};

const MainStack = createSharedElementStackNavigator<MainStackParamsList>();

const MainNavigator = () => {
  const renderBackArrow = useCallback(
    () => <Icon name="angle-left" size={24} color={Colors.darkestGray} />,
    [],
  );

  const renderCHeaderBackButton = useCallback(
    (props: any) => (
      <HeaderBackButton
        {...props}
        backImage={() => renderBackArrow()}
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
          headerBackgroundContainerStyle: {
            backgroundColor: Colors.lightGray100,
          },
        }}
        sharedElements={route => {
          const {item} = route.params;

          return [
            {
              id: `${item.id}`,
              animation: 'move',
              resize: 'auto',
            },
          ];
        }}
      />
    </MainStack.Navigator>
  );
};

const STYLES = StyleSheet.create({
  headerLeftStyles: {
    paddingLeft: vs.h8,
  },
  headerRightStyles: {
    paddingRight: vs.h8,
  },
  headerTitleStyles: {
    fontFamily: AppFonts.SoraSemiBold,
    fontSize: vs.h16,
  },
});

export default MainNavigator;
