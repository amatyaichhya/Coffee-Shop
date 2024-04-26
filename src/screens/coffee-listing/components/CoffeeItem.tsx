import React, {FC} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {AppFonts, Colors, CommonStyles, hs, vs} from '@cs/constants';
import {heightToDp, widthToDp} from '@cs/helpers';
import {FontedText, CImage} from '@cs/components';
import Icon from 'react-native-vector-icons/Feather';

interface CoffeeItemProps {
  coffeeImage?: string;
  coffeeId: string;
  coffeeName?: string;
  coffeeCategory?: string;
  coffeePrice: string;
  onNavigateToDetail?: (CoffeeItem: any) => void;
}

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
    backgroundColor: Colors.primary,
    padding: hs.w8,
    borderRadius: hs.w10,
  },
});

const CoffeeItem: FC<CoffeeItemProps> = ({
  coffeeImage,
  coffeeId,
  coffeeName,
  coffeeCategory,
  coffeePrice,
  onNavigateToDetail,
}) => {
  return (
    <Pressable onPress={onNavigateToDetail} style={STYLES.cardContainerStyles}>
      <SharedElement id={coffeeId}>
        <View style={STYLES.coffeeImage}>
          <CImage
            imageSource={coffeeImage}
            customContainerStyle={CommonStyles.image}
          />
        </View>
      </SharedElement>

      <View style={STYLES.productDetailContainer}>
        <View style={{marginBottom: vs.h14}}>
          <FontedText
            text={coffeeName}
            numberOfLines={1}
            color={Colors.darkestGray}
            fontFamily={AppFonts.SoraSemiBold}
          />

          {coffeeCategory ? (
            <FontedText
              text={coffeeCategory}
              fontSize={hs.w12}
              numberOfLines={1}
              color={Colors.darkGray}
            />
          ) : null}
        </View>

        <View style={[CommonStyles.flexRow, CommonStyles.justifySpaceBetween]}>
          {coffeePrice ? (
            <FontedText
              text={`$ ${coffeePrice}`}
              fontSize={hs.w18}
              numberOfLines={1}
              fontFamily={AppFonts.SoraSemiBold}
              color={Colors.lightBlack50}
            />
          ) : null}

          <Pressable style={STYLES.iconContainer}>
            <Icon name="plus" color={Colors.white} size={hs.w16} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default CoffeeItem;
