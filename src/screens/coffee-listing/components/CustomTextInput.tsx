import React, {FC} from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Input} from '@rneui/themed';

import {AppFonts, Colors, CommonStyles, hs, vs} from '@cs/constants';
import {SortIcon} from '@cs/assets';

interface CustomTextInputProps {
  searchValue: string;
  handleTextChange: (text: string) => void;
  handleSearchByName: () => void;
}

const STYLES = StyleSheet.create({
  containerStyles: {
    backgroundColor: Colors.black,
    paddingHorizontal: hs.w28,
    paddingVertical: vs.h16,
  },
  inputContainerStyles: {
    backgroundColor: Colors.darkestGray,
    height: vs.h52,
    borderRadius: hs.w14,
    paddingHorizontal: hs.w6,
    borderBottomWidth: 0,
  },
  inputStyles: {
    fontFamily: AppFonts.SoraRegular400,
    borderRadius: hs.w12,
    paddingHorizontal: hs.w10,
    paddingVertical: vs.h10,
    color: Colors.white,
  },
  mainContainerStyles: {
    paddingHorizontal: 0,
    height: vs.h52,
  },
  iconContainerStyles: {
    backgroundColor: Colors.primary,
    borderRadius: hs.w12,
    paddingHorizontal: hs.w12,
    paddingVertical: hs.w12,
    height: '100%',
  },
});

export interface Variety {
  id: number;
  variety: string;
  isSelected: boolean;
}

const CustomTextInput: FC<CustomTextInputProps> = ({
  searchValue,
  handleTextChange,
  handleSearchByName,
}) => {
  return (
    <View style={STYLES.containerStyles}>
      <Input
        value={searchValue}
        placeholder="Search coffee"
        onChangeText={text => handleTextChange(text)}
        inputContainerStyle={STYLES.inputContainerStyles}
        leftIcon={<Icon name="search" color={Colors.white} size={hs.w20} />}
        leftIconContainerStyle={{
          paddingLeft: hs.w16,
        }}
        rightIcon={
          <Pressable
            style={[
              CommonStyles.alignItemsCenter,
              CommonStyles.justifyContentCenter,
              STYLES.iconContainerStyles,
            ]}
            onPress={handleSearchByName}>
            <SortIcon />
          </Pressable>
        }
        inputStyle={STYLES.inputStyles}
        placeholderTextColor={Colors.darkGray}
        cursorColor={Colors.white}
        containerStyle={STYLES.mainContainerStyles}
        onSubmitEditing={handleSearchByName}
      />
    </View>
  );
};

export default CustomTextInput;
