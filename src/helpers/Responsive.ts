import {Dimensions, PixelRatio} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const {width, height} = Dimensions.get('window');

const widthPercentToDp = (value: string) => {
  let givenWidth = typeof value === 'number' ? value : parseFloat(value);

  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const heightPercentToDp = (value: string) => {
  let givenHeight = typeof value === 'number' ? value : parseFloat(value);

  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

const widthToDp = (value: number) => {
  return widthPercentToDp(`${(value / 375) * 100}%`);
};

const heightToDp = (value: number) => {
  return heightPercentToDp(`${(value / 812) * 100}%`);
};

export {
  width,
  height,
  widthToDp,
  heightToDp,
  widthPercentToDp,
  heightPercentToDp,
  screenHeight,
  screenWidth,
};
