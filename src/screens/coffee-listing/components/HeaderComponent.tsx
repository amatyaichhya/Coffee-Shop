import React, {FC} from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {AppFonts, Colors, CommonStyles, hs, vs} from '@cs/constants';
import {CImage, FontedText} from '@cs/components';

interface HeaderComponentProps {
  username: string;
  userPhoto: string;
  handleLogout: () => void;
}

const STYLES = StyleSheet.create({
  containerStyles: {
    paddingHorizontal: hs.w28,
    paddingTop: vs.h26,
    paddingBottom: vs.h10,
    backgroundColor: Colors.black,
  },
  letterSpacing: {letterSpacing: -0.24},
  imageContainer: {
    height: hs.w44,
    width: hs.w44,
    borderRadius: hs.w12,
    overflow: 'hidden',
  },
});

const HeaderComponent: FC<HeaderComponentProps> = ({
  username,
  userPhoto,
  handleLogout,
}) => {
  return (
    <View style={STYLES.containerStyles}>
      <View
        style={[
          CommonStyles.flexRow,
          CommonStyles.alignItemsCenter,
          CommonStyles.justifySpaceBetween,
        ]}>
        <View>
          <FontedText
            text="Welcome"
            fontSize={hs.w12}
            customTextStyle={STYLES.letterSpacing}
            color={Colors.white}
          />

          <Pressable
            style={[CommonStyles.flexRow, CommonStyles.alignItemsCenter]}>
            <FontedText
              text={username || ''}
              fontSize={hs.w14}
              fontFamily={AppFonts.SoraSemiBold}
              customTextStyle={{marginRight: hs.w2}}
              color={Colors.white}
            />

            <Icon name="chevron-down" size={hs.w14} />
          </Pressable>
        </View>

        <Pressable style={STYLES.imageContainer} onPress={handleLogout}>
          <CImage
            imageSource={userPhoto}
            customContainerStyle={CommonStyles.image}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default HeaderComponent;
