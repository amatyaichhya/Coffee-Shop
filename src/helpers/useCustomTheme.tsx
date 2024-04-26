import {Colors} from '@cs/constants';
import {useEffect, useMemo, useState} from 'react';
import {useColorScheme} from 'react-native';

export const useCustomTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const darkTheme = useMemo(
    () => ({
      primary: Colors.primary,
      secondary: Colors.secondary,
      headerBackground: Colors.black,
      background: Colors.lightBlack,
      secondaryBackground: Colors.darkestGray,
      plainBackground: Colors.darkestGray,
      textColor: Colors.lightGray100,
      lightTextColor: Colors.lightGray200,
      darkTextColor: Colors.white,
      dividerColor: Colors.darkGray,
    }),
    [],
  );

  const lightTheme = useMemo(
    () => ({
      primary: Colors.primary,
      secondary: Colors.secondary,
      headerBackground: Colors.white,
      background: Colors.lightGray100,
      secondaryBackground: Colors.lightGray,
      plainBackground: Colors.white,
      textColor: Colors.lightBlack50,
      lightTextColor: Colors.darkGray,
      darkTextColor: Colors.darkestGray,
      dividerColor: Colors.lightGray200,
    }),
    [],
  );

  const [theme, setTheme] = useState(isDarkMode ? darkTheme : lightTheme);

  useEffect(() => {
    if (isDarkMode) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, [darkTheme, isDarkMode, lightTheme]);

  return theme;
};
