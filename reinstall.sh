
rm -rf node_modules
ECHO "Removed node_modules"
rm -rf build
ECHO "Removed build"
rm -rf ios/build
ECHO "Removed ios/build"
yarn cache clean && yarn