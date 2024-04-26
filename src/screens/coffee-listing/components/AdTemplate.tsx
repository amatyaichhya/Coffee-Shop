import React, {FC} from 'react';
import {View, ImageBackground} from 'react-native';

import {AppFonts, Colors, CommonStyles, hs, vs} from '@cs/constants';
import {FontedText} from '@cs/components';
import {Images} from '@cs/assets';
import {AdTemplateStyles as STYLES} from '../styles';

interface AdTemplateProps {
  textWidth: number;
  handleTextLayout: (event: any) => void;
  textBottomWidth: number;
  handleTextBottomLayout: (event: any) => void;
}

const AdTemplate: FC<AdTemplateProps> = ({
  textWidth,
  textBottomWidth,
  handleTextLayout,
  handleTextBottomLayout,
}) => {
  return (
    <>
      <View style={STYLES.topContainerStyles} />

      <ImageBackground
        borderRadius={hs.w16}
        source={Images.promoBackground}
        style={[CommonStyles.justifySpaceBetween, STYLES.imageContainer]}>
        <View style={{rowGap: vs.h14}}>
          <View style={STYLES.iconContainer}>
            <FontedText
              text="Promo"
              color={Colors.white}
              fontFamily={AppFonts.SoraSemiBold}
              fontSize={hs.w14}
            />
          </View>

          <View style={STYLES.textContainerStyles}>
            <View>
              <View
                style={{
                  ...STYLES.textBackgroundStyles,
                  width: textWidth,
                }}
              />

              <FontedText
                text="Buy one get"
                color={Colors.white}
                fontFamily={AppFonts.SoraSemiBold}
                fontSize={hs.w32}
                customTextStyle={STYLES.textStyles}
                onLayout={handleTextLayout}
              />
            </View>

            <View>
              <View
                style={{
                  ...STYLES.textBackgroundStyles,
                  width: textBottomWidth,
                }}
              />
              <FontedText
                text="one Free"
                color={Colors.white}
                fontFamily={AppFonts.SoraSemiBold}
                fontSize={hs.w32}
                customTextStyle={STYLES.textStyles}
                onLayout={handleTextBottomLayout}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default AdTemplate;
