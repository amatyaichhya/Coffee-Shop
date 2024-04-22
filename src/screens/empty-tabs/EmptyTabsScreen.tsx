import React from 'react';
import {View} from 'react-native';

import {FontedText} from '@cs/components';
import {CommonStyles, hs} from '@cs/constants';

const EmptyTabsScreen = () => {
  return (
    <View
      style={[
        CommonStyles.alignItemsCenter,
        CommonStyles.justifyContentCenter,
        CommonStyles.flexRoot,
      ]}>
      <FontedText text="Coming Soon" fontSize={hs.w12} />
    </View>
  );
};

export default EmptyTabsScreen;
