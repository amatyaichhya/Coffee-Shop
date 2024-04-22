import React, {FC} from 'react';
import {ScrollView} from 'react-native';

import {FontedText} from '@cs/components';
import {hs} from '@cs/constants/Scaling';
import {MainRoutes, MainStackScreenProps} from '@cs/routes';

const CoffeeDetailScreen: FC<
  MainStackScreenProps<MainRoutes.CoffeeDetail>
> = () => {
  return (
    <ScrollView contentContainerStyle={{}}>
      <FontedText text="Coffee Detail" fontSize={hs.w12} />
    </ScrollView>
  );
};

export default CoffeeDetailScreen;
