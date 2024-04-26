import React, {FC, useEffect, useState} from 'react';
import {
  FlatList,
  StatusBar,
  View,
  StyleSheet,
  Keyboard,
  Alert,
} from 'react-native';
import {StickyHeaderScrollView} from 'react-native-sticky-parallax-header';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {CommonStyles, hs, vs, Colors} from '@cs/constants';
import {
  BottomTabRoutes,
  HomeBottomTabScreenProps,
  MainRoutes,
} from '@cs/routes';
import {useGetCoffeeProductListQuery} from '@cs/apis';
import {Coffee} from '@cs/models';
import {CoffeePlaceholder, FontedText} from '@cs/components';
import {
  CoffeeItem,
  CategoryOptions,
  HeaderComponent,
  AdTemplate,
  CustomTextInput,
} from './components';
import {coffeeVarieties} from './staticData';
import {height} from '@cs/helpers';
import {useAppDispatch, useAppSelector} from '@cs/hooks';
import {resetAuthState} from '@cs/redux/slices';
import {useCustomTheme} from '@cs/helpers';

const STYLES = StyleSheet.create({
  contentContainerStyles: {
    paddingHorizontal: hs.w28 + hs.w3,
    gap: hs.w9,
    paddingBottom: vs.h10,
  },
});

const CoffeeListingScreen: FC<
  HomeBottomTabScreenProps<BottomTabRoutes.Home>
> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.auth);

  const theme = useCustomTheme();

  const [textWidth, setTextWidth] = useState(0);
  const [textBottomWidth, setTextBottomWidth] = useState(0);
  const [categories, setCategories] = useState(coffeeVarieties);
  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState<Array<Coffee>>([]);

  const {data, isLoading} = useGetCoffeeProductListQuery({});

  useEffect(() => {
    if (data?.length) {
      setProducts(data);
    }
  }, [data]);

  useEffect(() => {
    if (!searchValue) {
      setProducts(data);
    }
  }, [data, searchValue]);

  const handleTextLayout = (event: any) => {
    const {width} = event.nativeEvent.layout;
    setTextWidth(width);
  };

  const handleTextBottomLayout = (event: any) => {
    const {width} = event.nativeEvent.layout;
    setTextBottomWidth(width);
  };

  const handleSelectCategories = (id: number) => {
    setCategories(
      categories.map(category =>
        category.id === id
          ? {...category, isSelected: true}
          : {...category, isSelected: false},
      ),
    );
  };

  const handleSearchByName = () => {
    Keyboard.dismiss();
  };

  const handleTextChange = (text: string) => {
    setSearchValue(text);

    if (text && products?.length) {
      setProducts(products.filter(product => product.name.includes(text)));
    }
  };

  const onLogoutPress = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(resetAuthState());
    } catch {
      Alert.alert('Error', 'Unable to log out, please try again.');
    }
  };

  const handleLogout = () => {
    Alert.alert('Log Out', 'Are you sure you want to log out?', [
      {
        text: 'Log Out',
        onPress: onLogoutPress,
      },
      {
        text: 'Cancel',
      },
    ]);
  };

  const handleRenderItem = ({item}: {item: Coffee}) =>
    isLoading ? (
      <CoffeePlaceholder />
    ) : (
      <CoffeeItem
        coffeeName={item.name}
        coffeeImage={item.imageUrl}
        coffeeCategory={
          item?.flavorProfile?.length
            ? `With ${item.flavorProfile.join(', ')}`
            : ''
        }
        onNavigateToDetail={() =>
          navigation.navigate(MainRoutes.CoffeeDetail, {
            item: {id: item.id, imageUrl: item.imageUrl, name: item.name},
          })
        }
        coffeeId={item.id.toString()}
        coffeePrice={item.price.toString()}
      />
    );

  const handleHeaderComponent = () => (
    <HeaderComponent
      username={user?.name || ''}
      userPhoto={user?.photo || ''}
      handleLogout={handleLogout}
    />
  );

  const handleEmptyComponent = () =>
    isLoading ? null : (
      <View
        style={[
          CommonStyles.flexRoot,
          CommonStyles.justifyContentCenter,
          CommonStyles.alignItemsCenter,
          {height: height / 3},
        ]}>
        <FontedText text="No products available." color={theme.textColor} />
      </View>
    );

  return (
    <StickyHeaderScrollView
      renderHeader={handleHeaderComponent}
      renderTabs={() => (
        <CustomTextInput
          searchValue={searchValue}
          handleSearchByName={handleSearchByName}
          handleTextChange={handleTextChange}
        />
      )}
      contentContainerStyle={{backgroundColor: theme.background}}
      showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />

      <AdTemplate
        {...{
          textWidth,
          textBottomWidth,
          handleTextLayout,
          handleTextBottomLayout,
        }}
      />

      <CategoryOptions
        categories={categories}
        handleSelectCategories={handleSelectCategories}
      />

      <FlatList
        contentContainerStyle={[
          CommonStyles.flexGrowRoot,
          STYLES.contentContainerStyles,
        ]}
        keyExtractor={(_, index) => index.toString()}
        data={isLoading ? Array(4).fill({}) : products}
        renderItem={handleRenderItem}
        columnWrapperStyle={{gap: hs.w6}}
        numColumns={2}
        ListEmptyComponent={handleEmptyComponent}
      />
    </StickyHeaderScrollView>
  );
};

export default CoffeeListingScreen;
