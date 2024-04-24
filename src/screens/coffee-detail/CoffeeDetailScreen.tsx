import React, {FC} from 'react';
import {ScrollView, Image, View} from 'react-native';

import {CImage, FontedText} from '@cs/components';
import {CommonStyles, hs, vs} from '@cs/constants';
import {MainRoutes, MainStackScreenProps} from '@cs/routes';
import {heightToDp} from '@cs/helpers';
import {SharedElement} from 'react-navigation-shared-element';

const CoffeeDetailScreen: FC<MainStackScreenProps<MainRoutes.CoffeeDetail>> = ({
  route,
}) => {
  const {item} = route.params || {};

  return (
    <ScrollView contentContainerStyle={{paddingHorizontal: hs.w30}}>
      <SharedElement id={item?.id?.toString() || ''}>
        <CImage
          imageSource={item?.imageUrl}
          customContainerStyle={[
            CommonStyles.image,
            {
              height: heightToDp(226),
              marginVertical: vs.h26,
              borderRadius: hs.w12,
            },
          ]}
        />
      </SharedElement>

      <FontedText text="Coffee Detail" fontSize={hs.w12} />
    </ScrollView>
  );
};

export default CoffeeDetailScreen;
