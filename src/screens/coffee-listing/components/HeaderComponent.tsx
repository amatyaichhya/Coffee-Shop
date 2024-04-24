import React, {FC} from 'react';
import {StyleSheet, Pressable, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {AppFonts, Colors, CommonStyles, hs, vs} from '@cs/constants';
import {FontedText} from '@cs/components';

interface HeaderComponentProps {}

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
    overflow: 'hidden',
  },
});

const HeaderComponent: FC<HeaderComponentProps> = () => {
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
            text="Location"
            fontSize={hs.w12}
            customTextStyle={STYLES.letterSpacing}
            color={Colors.white}
          />

          <Pressable
            style={[CommonStyles.flexRow, CommonStyles.alignItemsCenter]}>
            <FontedText
              text="Bilzen,Tanjungbalai"
              fontSize={hs.w14}
              fontFamily={AppFonts.SoraSemiBold}
              customTextStyle={{marginRight: hs.w2}}
              color={Colors.white}
            />

            <Icon name="chevron-down" size={hs.w14} />
          </Pressable>
        </View>

        <View style={STYLES.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
            }}
            style={[CommonStyles.image, {borderRadius: hs.w12}]}
          />
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;
