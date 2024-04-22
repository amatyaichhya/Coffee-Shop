import React, {FC} from 'react';
import {Pressable, ScrollView} from 'react-native';

import {AuthRoutes, AuthStackScreenProps} from '@cs/routes';
import {FontedText} from '@cs/components';
import {CommonStyles, hs} from '@cs/constants';

const LoginScreen: FC<AuthStackScreenProps<AuthRoutes.Login>> = ({
  navigation,
}) => {
  return (
    <ScrollView
      contentContainerStyle={[
        CommonStyles.alignItemsCenter,
        CommonStyles.justifyContentCenter,
        CommonStyles.flexRoot,
      ]}>
      <Pressable onPress={() => navigation.navigate(AuthRoutes.Main)}>
        <FontedText text="LOGIN" fontSize={hs.w12} />
      </Pressable>
    </ScrollView>
  );
};

export default LoginScreen;
