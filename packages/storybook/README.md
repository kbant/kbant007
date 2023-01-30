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

~~yarn workspace @kbant/mobile-storybook add -D react-native-storybook-loader~~

## Start mobile
```
yarn mobile
``` 

## Start web
```
yarn web
``` 

## Watching story files
```
yarn watcher
``` 

## Reference 
[react-native-storybook-starter](https://github.com/dannyhw/react-native-storybook-starter)