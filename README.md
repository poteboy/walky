# walky

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

## ApolloでTSの型付カスタムHookを自動生成する

サーバー側のtypeDefsと同様のものを`src/apollo/schema.gql`に記載する

次のコマンドを打つ
```sh
yarn graphql-codegen
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
