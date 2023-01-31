module.exports = {
  stories: ['../stories/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['react-native-reanimated', 'react-native-vector-icons'],
        babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
  ],
  framework: '@storybook/react',
};
