import React, {FC} from 'react';
import {Pressable, ScrollView} from 'react-native';

import {AuthRoutes, AuthStackScreenProps} from '@cs/routes';
import {FontedText} from '@cs/components';
import {CommonStyles, hs} from '@cs/constants';
import {useAppDispatch} from '@cs/hooks';
import {setLoggedIn} from '@cs/redux/slices';

const LoginScreen: FC<AuthStackScreenProps<AuthRoutes.Login>> = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(setLoggedIn(true));
  };

  return (
    <ScrollView
      contentContainerStyle={[
        CommonStyles.alignItemsCenter,
        CommonStyles.justifyContentCenter,
        CommonStyles.flexRoot,
      ]}>
      <Pressable onPress={handleLogin}>
        <FontedText text="LOGIN" fontSize={hs.w12} />
      </Pressable>
    </ScrollView>
  );
};

export default LoginScreen;
