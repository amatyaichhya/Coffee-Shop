import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Colors} from '@cs/constants';
import CoffeeShop from '@cs/CoffeeShop';
import {store, persistor} from '@cs/redux/Store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CoffeeShop />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
