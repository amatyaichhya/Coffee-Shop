import {Colors} from '@cs/constants';
import {useEffect, useMemo, useState} from 'react';
import {useColorScheme} from 'react-native';

export const useCustomTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const darkTheme = useMemo(
    () => ({
      primary: Colors.primary,
      secondary: Colors.secondary,
      background: Colors.darkestGray,
      secondaryBackground: Colors.lightBlack100,
      textColor: Colors.lightGray100,
      lightTextColor: Colors.white,
    }),
    [],
  );

  const lightTheme = useMemo(
    () => ({
      primary: Colors.primary,
      secondary: Colors.secondary,
      background: Colors.lightGray100,
      textColor: Colors.lightBlack50,
      lightTextColor: Colors.darkGray,
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
