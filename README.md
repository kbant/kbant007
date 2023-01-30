# KBANT Project
monorepo([kbant005](https://github.com/kbant/kbant005)) + storybook

## Yarn
```
$ yarn reset && yarn set version berry && yarn set version latest && yarn install
$ yarn --version
```


## yarn setting
``` 
nvm use 16
rvm use ruby-2.7.6
```

## pod install
```
cd packages/mobile/ios
bundle install
pod install
```

## run mobile
```
yarn reset
yarn install
yarn mobile
```

### References
- [React Native monorepo](https://github.com/mmazzarolo/react-native-universal-monorepo)