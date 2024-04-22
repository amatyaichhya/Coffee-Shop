import type {StackScreenProps} from '@react-navigation/stack';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {AuthStackParamsList, AuthRoutes} from './AuthNavigator';
import {MainStackParamsList, MainRoutes} from './MainNavigator';
import {BottomTabParamsList, BottomTabRoutes} from './BottomTabNavigator';

export type AuthStackScreenProps<
  RouteName extends keyof AuthStackParamsList = AuthRoutes,
> = StackScreenProps<AuthStackParamsList, RouteName>;

export type MainStackScreenProps<
  RouteName extends keyof MainStackParamsList = MainRoutes,
> = StackScreenProps<MainStackParamsList, RouteName>;

export type HomeBottomTabScreenProps<
  TabRouteName extends keyof BottomTabParamsList = BottomTabRoutes,
  StackRouteName extends keyof MainStackParamsList = MainRoutes,
> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamsList, TabRouteName>,
  StackScreenProps<MainStackParamsList, StackRouteName>
>;
