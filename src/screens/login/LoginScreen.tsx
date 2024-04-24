import React, {FC} from 'react';
import {Image, Pressable, SafeAreaView, StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {AuthRoutes, AuthStackScreenProps} from '@cs/routes';
import {AppFonts, Colors, CommonStyles, hs, vs} from '@cs/constants';
import {useAppDispatch} from '@cs/hooks';
import {setLoggedIn} from '@cs/redux/slices';
import {Images} from '@cs/assets/pngs';
import {GoogleLogo} from '@cs/assets';
import {FontedText} from '@cs/components';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const STYLES = StyleSheet.create({
  bottomContainer: {backgroundColor: Colors.black, paddingBottom: vs.h10},
  textSpacing: {letterSpacing: 0.01},
  buttonContainerStyles: {
    marginHorizontal: hs.w30,
    borderRadius: 10,
    height: 54,
    columnGap: hs.w15,
  },
  textOpacity: {opacity: 0.54},
});

const LoginScreen: FC<AuthStackScreenProps<AuthRoutes.Login>> = () => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();

  const handleLogin = () => {
    dispatch(setLoggedIn(true));
  };

  return (
    <SafeAreaView
      style={[
        CommonStyles.flexRoot,
        STYLES.bottomContainer,
        {paddingBottom: insets.bottom ? insets.bottom + vs.h10 : vs.h10},
      ]}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />

      <View style={CommonStyles.flexRoot}>
        <Image
          source={Images.background}
          style={CommonStyles.image}
          resizeMode="cover"
        />

        <LinearGradient
          style={{...StyleSheet.absoluteFillObject}}
          colors={[
            Colors.black90,
            'transparent',
            'transparent',
            Colors.black90,
          ]}
          locations={[0, 0.3, 0.9, 0.96]}
        />
      </View>

      <View style={STYLES.bottomContainer}>
        <View style={CommonStyles.alignItemsCenter}>
          <FontedText
            text={'Coffee so good,\nyour taste buds\nwill love it.'}
            color={Colors.white}
            fontSize={hs.w34}
            fontFamily={AppFonts.SoraBold700}
            customTextStyle={[CommonStyles.centerText, STYLES.textSpacing]}
          />

          <FontedText
            text={'The best grain, the finest roast, the\npowerful flavor.'}
            color={Colors.white}
            fontSize={hs.w14}
            customTextStyle={[
              CommonStyles.centerText,
              STYLES.textSpacing,
              {marginVertical: vs.h16},
            ]}
          />
        </View>

        <Pressable
          style={[
            CommonStyles.whiteBg,
            CommonStyles.flexRow,
            CommonStyles.alignItemsCenter,
            CommonStyles.justifyContentCenter,
            STYLES.buttonContainerStyles,
          ]}
          onPress={handleLogin}>
          <GoogleLogo />

          <FontedText
            text="Continue with Google"
            fontSize={20}
            customTextStyle={[STYLES.textSpacing, STYLES.textOpacity]}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
