import {StyleSheet} from 'react-native';

import {Colors, hs, vs} from '@cs/constants';

export const AdTemplateStyles = StyleSheet.create({
  imageContainer: {
    paddingHorizontal: hs.w24,
    paddingVertical: vs.h14,
    marginHorizontal: hs.w30,
    marginTop: -vs.h62,
  },
  iconContainer: {
    backgroundColor: Colors.red,
    alignSelf: 'flex-start',
    borderRadius: hs.w8,
    paddingVertical: vs.h4,
    paddingHorizontal: hs.w6,
  },
  topContainerStyles: {
    backgroundColor: Colors.black,
    height: vs.h72,
  },
  textContainerStyles: {
    marginTop: vs.h24,
    rowGap: vs.h18,
  },
  textBackgroundStyles: {
    backgroundColor: Colors.black,
    height: hs.w32,
    zIndex: 0,
  },
  textStyles: {
    paddingHorizontal: hs.w2,
    position: 'absolute',
    zIndex: 1,
    top: -vs.h32,
    left: 0,
  },
});
