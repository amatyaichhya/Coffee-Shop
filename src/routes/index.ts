import AuthNavigator, {AuthStackParamsList, AuthRoutes} from './AuthNavigator';
import MainNavigator, {MainStackParamsList, MainRoutes} from './MainNavigator';
import BottomTabNavigator, {
  BottomTabParamsList,
  BottomTabRoutes,
} from './BottomTabNavigator';

export {
  AuthNavigator,
  AuthRoutes,
  MainNavigator,
  MainRoutes,
  BottomTabNavigator,
  BottomTabRoutes,
};
export type {AuthStackParamsList, MainStackParamsList, BottomTabParamsList};
export * from './types';
