/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: {
      '@src': path.resolve(__dirname, 'src'),
      sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs'],
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
