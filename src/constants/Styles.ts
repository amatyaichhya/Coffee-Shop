import {StyleSheet} from 'react-native';
import {Colors} from './Colors';
import {hs, vs} from './Scaling';

const CommonStyles = StyleSheet.create({
  flexRoot: {
    flex: 1,
  },
  flexGrowRoot: {
    flexGrow: 1,
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  centerText: {
    textAlign: 'center',
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentEvenly: {
    justifyContent: 'space-evenly',
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: vs.h12,
    paddingHorizontal: hs.w14,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  whiteBg: {
    backgroundColor: Colors.white,
  },
  errorText: {
    fontSize: hs.w12,
    color: Colors.red,
  },
  width100: {
    width: '100%',
  },
});

export {CommonStyles};
