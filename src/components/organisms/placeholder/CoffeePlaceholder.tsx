import React, {FC} from 'react';
import {View, StyleSheet, Pressable, useColorScheme} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

import {Colors, CommonStyles, hs, vs} from '@cs/constants';
import {heightToDp, useCustomTheme, widthToDp} from '@cs/helpers';

interface CoffeePlaceholderProps {}

const STYLES = StyleSheet.create({
  cardContainerStyles: {
    backgroundColor: Colors.white,
    shadowColor: 'rgba(144, 143, 143, 0.6)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: vs.h4,
    borderRadius: hs.w16,
    borderWidth: widthToDp(0.2),
    borderColor: Colors.lightGray100,
    width: '50%',
  },
  coffeeImage: {
    height: heightToDp(132),
    borderRadius: hs.w16,
    marginHorizontal: hs.w4,
    marginTop: vs.h4,
    overflow: 'hidden',
  },
  productDetailContainer: {
    paddingHorizontal: hs.w12,
    paddingTop: vs.h6,
    paddingBottom: vs.h12,
  },
  iconContainer: {
    padding: hs.w8,
    borderRadius: hs.w10,
    height: hs.w32,
    width: hs.w32,
  },
  textPlaceholderStyles: {width: '90%'},
});

const CoffeePlaceholder: FC<CoffeePlaceholderProps> = ({}) => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  const theme = useCustomTheme();

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Pressable
      style={[
        STYLES.cardContainerStyles,
        {backgroundColor: theme.plainBackground, borderColor: theme.background},
      ]}>
      <View style={STYLES.coffeeImage}>
        <ShimmerPlaceholder
          height={heightToDp(132)}
          style={CommonStyles.image}
          shimmerColors={
            isDarkMode
              ? [Colors.darkGray, Colors.lightGray300, Colors.lightGray200]
              : [Colors.lightGray200, Colors.lightGray100, Colors.lightGray]
          }
        />
      </View>

      <View style={STYLES.productDetailContainer}>
        <View style={{marginBottom: vs.h14, gap: vs.h4}}>
          <ShimmerPlaceholder
            height={hs.w16}
            style={STYLES.textPlaceholderStyles}
            shimmerColors={
              isDarkMode
                ? [Colors.darkGray, Colors.lightGray300, Colors.lightGray200]
                : [Colors.lightGray200, Colors.lightGray100, Colors.lightGray]
            }
          />

          <ShimmerPlaceholder
            height={hs.w12}
            style={STYLES.textPlaceholderStyles}
            shimmerColors={
              isDarkMode
                ? [Colors.darkGray, Colors.lightGray300, Colors.lightGray200]
                : [Colors.lightGray200, Colors.lightGray100, Colors.lightGray]
            }
          />
        </View>

        <View style={[CommonStyles.flexRow, CommonStyles.justifySpaceBetween]}>
          <ShimmerPlaceholder
            height={hs.w32}
            width={hs.w44}
            shimmerColors={
              isDarkMode
                ? [Colors.darkGray, Colors.lightGray300]
                : [Colors.lightGray200, Colors.lightGray100]
            }
          />

          <ShimmerPlaceholder
            height={hs.w32}
            width={hs.w32}
            shimmerColors={
              isDarkMode
                ? [Colors.darkGray, Colors.lightGray300]
                : [Colors.lightGray200, Colors.lightGray100]
            }
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CoffeePlaceholder;
