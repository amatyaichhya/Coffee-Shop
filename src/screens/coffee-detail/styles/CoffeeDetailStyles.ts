import {StyleSheet} from 'react-native';

import {Colors, hs, vs} from '@cs/constants';
import {heightToDp, width} from '@cs/helpers';

export const CoffeeDetailStyles = StyleSheet.create({
  imageContainer: {
    height: heightToDp(226),
    marginVertical: vs.h26,
    borderRadius: hs.w12,
  },
  iconContainer: {
    backgroundColor: Colors.secondary,
    height: hs.w44,
    width: hs.w44,
    borderRadius: hs.w14,
  },
  imageIcon: {height: hs.w22, width: hs.w22},
  divider: {
    height: vs.h1,
    backgroundColor: Colors.lightGray200,
    marginBottom: vs.h20,
    marginTop: vs.h26,
  },
  detailContainer: {paddingBottom: vs.h22, gap: vs.h12},
  sizeContainer: {
    borderWidth: hs.w1,
    paddingVertical: vs.h10,
    borderRadius: hs.w12,
    width: width / 3 - hs.w28,
  },
  footerContainer: {
    shadowColor: 'rgba(144, 143, 143, 0.6)',
    shadowOffset: {width: 10, height: 40},
    shadowOpacity: 0.3,
    shadowRadius: hs.w20,
    borderTopLeftRadius: hs.w20,
    borderTopRightRadius: hs.w20,
    borderWidth: hs.w1,
    borderColor: Colors.lightGray200,
    backgroundColor: Colors.lightGray100,
    paddingHorizontal: hs.w18,
    paddingVertical: vs.h20,
  },
  footerButton: {
    backgroundColor: Colors.primary,
    borderRadius: hs.w16,
    paddingVertical: vs.h18,
    flex: 3,
  },
  footerText: {flex: 2},
});
