# Pedometer

backend: https://github.com/eddyariki/walky-functions

## 立ち上げ方法

依存関係を色々インストールする

```sh
yarn install
cd ios
pod install
```

立ち上げる

```sh
cd ..
yarn start
react-native run-ios
```

## 立ち上がらない時

色々消す
```sh
rm -rf node_modules
rm -rf build
rm -rf ios/build
```

再度入れ直す
```sh
yarn cache clean && yarn
```
