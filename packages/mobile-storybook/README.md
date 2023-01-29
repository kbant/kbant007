```
cp mobile mobile-storybook
```

```
npx sb init --type react_native
```

```
cd packages/mobile-storybook/ios
bundle install
pod install
```

```
yarn workspace @kbant/mobile-storybook add -D react-native-storybook-loader
```