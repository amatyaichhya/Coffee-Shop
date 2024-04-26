import React, {FC, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {AuthRoutes, AuthStackScreenProps} from '@cs/routes';
import {AppFonts, Colors, CommonStyles, hs, vs} from '@cs/constants';
import {useAppDispatch} from '@cs/hooks';
import {setLoggedIn} from '@cs/redux/slices';
import {Images} from '@cs/assets/pngs';
import {GoogleLogo} from '@cs/assets';
import {FontedText} from '@cs/components';
import {setUser} from '@cs/redux/slices/auth/AuthSlice';

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

  const [isGoogleLogging, setIsGoogleLogging] = useState<boolean>(false);

  // const handleLogin = () => {
  //   dispatch(setLoggedIn(true));
  // };

  const handleContinueWithGooglePress = async () => {
    try {
      setIsGoogleLogging(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      if (userInfo?.idToken) {
        dispatch(setUser(userInfo?.user));
        dispatch(setLoggedIn(true));
      }
    } catch (error: any) {
      console.log(error);

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        Alert.alert('Unable to connect!', 'Play Services is not available');
      } else {
        // some other error happened
        if (Number(error.status) === 400) {
          await GoogleSignin.signOut();

          return Alert.alert(
            'Login Failed!',
            error?.data?.responseMsg || 'Something went wrong.',
          );
        }

        Alert.alert(
          'Unable to connect!',
          'Something went wrong. Please try again later.',
        );
      }
    } finally {
      setIsGoogleLogging(false);
    }
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
            fontFamily={AppFonts.SoraSemiBold}
            customTextStyle={[CommonStyles.centerText, STYLES.textSpacing]}
          />

          <FontedText
            text={'The best grain, the finest roast, the\npowerful flavor.'}
            color={Colors.lightGray300}
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
          onPress={isGoogleLogging ? undefined : handleContinueWithGooglePress}>
          {isGoogleLogging ? (
            <ActivityIndicator color="rgba(0, 0, 0, 0.54)" size={24} />
          ) : (
            <>
              <GoogleLogo />

              <FontedText
                text="Continue with Google"
                fontSize={20}
                fontFamily={AppFonts.SoraSemiBold}
                customTextStyle={[STYLES.textSpacing, STYLES.textOpacity]}
              />
            </>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
