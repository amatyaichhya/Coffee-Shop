import React, {FC, useState} from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ImageRequireSource,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import FastImage, {Source} from 'react-native-fast-image';

import {CommonStyles, Colors} from '@cs/constants';
import {width as windowWidth} from '@cs/helpers';
import {Images} from '@cs/assets';

interface CustomImageProps {
  customContainerStyle?: StyleProp<ViewStyle>;
  imageSource?: string | undefined;
  emptyImage?: Source | ImageRequireSource;
  hasOverlay?: boolean;
  overlayChildren?: React.ReactNode;
  customOverlayStyles?: StyleProp<ViewStyle>;
}

const STYLES = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(17, 24, 39, 0.57)',
    justifyContent: 'center',
  },
});

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const CustomImage: FC<CustomImageProps> = ({
  customContainerStyle,
  imageSource,
  emptyImage = Images.defaultImg,
  hasOverlay = false,
  overlayChildren,
  customOverlayStyles = {},
  ...props
}) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);

  const showImageLoading = () => setIsImageLoading(true);

  const hideImageLoading = () => setIsImageLoading(false);

  const source = !imageSource
    ? emptyImage
    : {
        uri: imageSource,
        priority: FastImage.priority.low,
      };

  return (
    <View
      style={StyleSheet.flatten([
        STYLES.container,
        !imageSource && {
          backgroundColor: Colors.lightGray,
        },
        customContainerStyle,
      ])}>
      <FastImage
        style={CommonStyles.image}
        source={source}
        resizeMode="cover"
        onProgress={showImageLoading}
        onLoad={hideImageLoading}
        {...props}>
        {hasOverlay ? (
          <View style={[STYLES.overlay, customOverlayStyles]}>
            {overlayChildren}
          </View>
        ) : null}
      </FastImage>

      {isImageLoading && (
        <ShimmerPlaceholder width={windowWidth} height={'100%'} />
      )}
    </View>
  );
};

export default React.memo(CustomImage);
