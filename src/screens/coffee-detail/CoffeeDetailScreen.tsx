import React, {FC, useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  ActivityIndicator,
  Pressable,
  FlatList,
  Text,
  Image,
  RefreshControl,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {CImage, FontedText} from '@cs/components';
import {AppFonts, Colors, CommonStyles, hs, vs} from '@cs/constants';
import {MainRoutes, MainStackScreenProps} from '@cs/routes';
import {height} from '@cs/helpers';
import {useGetCoffeeProductDetailQuery} from '@cs/apis';
import {Images} from '@cs/assets';
import {CoffeeDetailStyles as STYLES} from './styles';

interface Size {
  id: number;
  size: string;
  isSelected: boolean;
}

const sizes = [
  {id: 1, size: 'S', isSelected: false},
  {id: 2, size: 'M', isSelected: true},
  {id: 3, size: 'L', isSelected: false},
];

const CoffeeDetailScreen: FC<MainStackScreenProps<MainRoutes.CoffeeDetail>> = ({
  route,
}) => {
  const {item: product} = route.params || {};

  const [showFullContent, setShowFullContent] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [productSizes, setProductSizes] = useState<Array<Size>>(sizes);

  const {data, isLoading, refetch, isFetching} = useGetCoffeeProductDetailQuery(
    product?.id,
  );

  const productDetail = data?.[0] || {};

  useEffect(() => {
    if (!isFetching) {
      setIsRefreshing(false);
    }
  }, [isFetching]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    refetch();
  };

  const handleToggleContent = () => {
    setShowFullContent(prevState => !prevState);
  };

  const handleToggleSizes = (id: number) => {
    setProductSizes(
      productSizes.map(size =>
        size.id === id
          ? {...size, isSelected: true}
          : {...size, isSelected: false},
      ),
    );
  };

  const renderSizeItem = ({item}: {item: Size}) => (
    <Pressable
      onPress={() => handleToggleSizes(item.id)}
      style={[
        CommonStyles.flexRoot,
        CommonStyles.alignItemsCenter,
        STYLES.sizeContainer,
        {
          backgroundColor: !item.isSelected ? Colors.white : Colors.secondary,
          borderColor: item.isSelected ? Colors.primary : Colors.lightGray200,
        },
      ]}>
      <FontedText
        text={item.size}
        color={item.isSelected ? Colors.primary : Colors.darkestGray}
        fontFamily={AppFonts.SoraSemiBold}
      />
    </Pressable>
  );

  const truncatedDescription = productDetail?.description?.slice(0, 100);
  const shouldShowSeeMore = productDetail?.description?.length > 100;

  return (
    <View
      style={[
        CommonStyles.flexRoot,
        {
          backgroundColor: Colors.lightGray100,
        },
      ]}>
      <ScrollView
        contentContainerStyle={[
          {
            paddingHorizontal: hs.w28,
          },
        ]}
        refreshControl={
          <RefreshControl
            colors={[Colors.primary]}
            tintColor={Colors.primary}
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
          />
        }>
        <SharedElement id={product?.id?.toString() || ''}>
          <CImage
            imageSource={product?.imageUrl}
            customContainerStyle={[CommonStyles.image, STYLES.imageContainer]}
          />
        </SharedElement>

        {isLoading ? (
          <View style={[CommonStyles.flexRoot]}>
            <ActivityIndicator color={Colors.primary} size={'small'} />
          </View>
        ) : productDetail && Object.keys(productDetail).length === 0 ? (
          <View
            style={[
              CommonStyles.flexRoot,
              CommonStyles.justifyContentCenter,
              CommonStyles.alignItemsCenter,
              {height: height / 3},
            ]}>
            <FontedText text="No details available." />
          </View>
        ) : (
          <View style={{marginBottom: vs.h14}}>
            <View style={{marginBottom: vs.h6}}>
              <FontedText
                text={productDetail?.name}
                numberOfLines={1}
                color={Colors.darkestGray}
                fontFamily={AppFonts.SoraSemiBold}
                fontSize={hs.w20}
              />

              {productDetail?.flavorProfile?.length ? (
                <FontedText
                  text={`With ${productDetail?.flavorProfile?.join(', ')}`}
                  fontSize={hs.w12}
                  numberOfLines={1}
                  color={Colors.darkGray}
                />
              ) : null}
            </View>

            <View
              style={[
                CommonStyles.justifyContentEnd,
                CommonStyles.flexRow,
                {columnGap: hs.w10},
              ]}>
              <View
                style={[
                  CommonStyles.alignItemsCenter,
                  CommonStyles.justifyContentCenter,
                  STYLES.iconContainer,
                ]}>
                <View style={STYLES.imageIcon}>
                  <Image
                    source={Images.beanIcon}
                    style={CommonStyles.image}
                    resizeMode="cover"
                  />
                </View>
              </View>

              <View
                style={[
                  CommonStyles.alignItemsCenter,
                  CommonStyles.justifyContentCenter,
                  STYLES.iconContainer,
                ]}>
                <View style={STYLES.imageIcon}>
                  <Image
                    source={Images.beanPackageIcon}
                    style={CommonStyles.image}
                    resizeMode="cover"
                  />
                </View>
              </View>
            </View>

            <View style={STYLES.divider} />

            <View style={STYLES.detailContainer}>
              <FontedText
                text="Description"
                numberOfLines={1}
                color={Colors.darkestGray}
                fontFamily={AppFonts.SoraSemiBold}
              />

              <Text
                onPress={shouldShowSeeMore ? handleToggleContent : undefined}
                style={{
                  color: Colors.darkGray,
                  fontFamily: AppFonts.SoraSemiBold,
                  fontSize: hs.w12,
                }}>
                {showFullContent
                  ? productDetail?.description
                  : `${truncatedDescription}${
                      shouldShowSeeMore ? '... ' : ''
                    }` || ''}
                <Text style={{color: Colors.primary}}>
                  {!showFullContent ? ' Read More' : ' Show Less'}
                </Text>
              </Text>
            </View>

            <View style={STYLES.detailContainer}>
              <FontedText
                text="Size"
                numberOfLines={1}
                color={Colors.darkestGray}
                fontFamily={AppFonts.SoraSemiBold}
              />

              <FlatList
                data={productSizes}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                scrollEnabled={false}
                contentContainerStyle={[
                  CommonStyles.flexGrowRoot,
                  CommonStyles.justifySpaceBetween,
                  {
                    gap: hs.w14,
                  },
                ]}
                renderItem={renderSizeItem}
              />
            </View>
          </View>
        )}
      </ScrollView>

      {productDetail && Object.keys(productDetail).length !== 0 ? (
        <View
          style={[
            CommonStyles.flexRow,
            CommonStyles.justifySpaceBetween,
            STYLES.footerContainer,
          ]}>
          <View style={[CommonStyles.alignItemsCenter, STYLES.footerText]}>
            <View>
              <FontedText
                text="Price"
                color={Colors.darkGray}
                fontSize={hs.w14}
              />
              <FontedText
                text={
                  productDetail?.price ? `$ ${productDetail?.price}` : 'N/A'
                }
                color={Colors.primary}
                fontFamily={AppFonts.SoraSemiBold}
                fontSize={hs.w18}
              />
            </View>
          </View>

          <Pressable
            style={[
              CommonStyles.alignItemsCenter,
              CommonStyles.justifyContentCenter,
              STYLES.footerButton,
            ]}>
            <FontedText
              text="Buy Now"
              color={Colors.white}
              fontFamily={AppFonts.SoraSemiBold}
            />
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

export default CoffeeDetailScreen;
