import React, {FC} from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';

import {Colors, hs} from '@cs/constants';
import {AppFonts} from '@cs/constants';

interface FontedTextProps extends TextProps {
  text: string | undefined;
  fontFamily?: AppFonts;
  fontSize?: number;
  color?: string;
  numberOfLines?: number;
  customTextStyle?: object;
  onTextPress?: () => void;
}

const FontedText: FC<FontedTextProps> = ({
  text = '',
  fontFamily = AppFonts.SoraRegular400,
  fontSize = hs.w16,
  color = Colors.black,
  numberOfLines,
  customTextStyle,
  onTextPress,
  ...restProps
}) => {
  return (
    <Text
      style={StyleSheet.flatten([
        {
          fontFamily,
          fontSize,
          color,
        },
        customTextStyle,
      ])}
      onPress={onTextPress}
      numberOfLines={numberOfLines}
      {...restProps}>
      {text}
    </Text>
  );
};

export default FontedText;
