import React, {FC} from 'react';
import {StyleSheet, FlatList, Pressable} from 'react-native';

import {AppFonts, Colors, hs, vs} from '@cs/constants';
import {FontedText} from '@cs/components';
import {useCustomTheme} from '@cs/helpers';

interface CategoryOptionsProps {
  categories: Array<Variety>;
  handleSelectCategories: (id: number) => void;
}

const STYLES = StyleSheet.create({
  containerStyles: {
    paddingTop: vs.h26,
    paddingBottom: vs.h24,
    paddingHorizontal: hs.w28,
    gap: hs.w10,
  },
  categoryStyles: {
    borderRadius: hs.w12,
    paddingHorizontal: hs.w16,
    paddingVertical: vs.h10,
  },
});

export interface Variety {
  id: number;
  variety: string;
  isSelected: boolean;
}

const CategoryOptions: FC<CategoryOptionsProps> = ({
  categories,
  handleSelectCategories,
}) => {
  const theme = useCustomTheme();

  const handleRenderListItem = ({item}: {item: Variety}) => (
    <Pressable
      onPress={() => handleSelectCategories(item.id)}
      style={{
        ...STYLES.categoryStyles,
        backgroundColor: item.isSelected ? Colors.primary : Colors.lightGray,
      }}>
      <FontedText
        text={item.variety}
        color={item.isSelected ? Colors.white : Colors.lightBlack50}
        fontFamily={AppFonts.SoraSemiBold}
        fontSize={hs.w14}
      />
    </Pressable>
  );

  return (
    <FlatList
      data={categories}
      horizontal
      keyExtractor={item => item.id.toString()}
      renderItem={handleRenderListItem}
      contentContainerStyle={STYLES.containerStyles}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategoryOptions;
