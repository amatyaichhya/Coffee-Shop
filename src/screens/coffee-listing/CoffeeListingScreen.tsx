import {FontedText} from '@cs/components';
import {CommonStyles} from '@cs/constants';
import {
  BottomTabRoutes,
  HomeBottomTabScreenProps,
  MainRoutes,
} from '@cs/routes';
import React, {FC} from 'react';
import {Pressable, ScrollView} from 'react-native';

const CoffeeListingScreen: FC<
  HomeBottomTabScreenProps<BottomTabRoutes.Home>
> = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={[
        CommonStyles.alignItemsCenter,
        CommonStyles.justifyContentCenter,
        CommonStyles.flexRoot,
      ]}>
      <Pressable onPress={() => navigation.navigate(MainRoutes.CoffeeDetail)}>
        <FontedText text="Coffee Listing" />
      </Pressable>
    </ScrollView>
  );
};

export default CoffeeListingScreen;
