module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@cs': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
