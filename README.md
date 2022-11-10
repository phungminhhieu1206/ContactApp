Build App ReactNative
- intercepter giúp chặn người dùng khi hết hạn token
- dùng SafeAreaView thay vì dùng View

1. Cau truc thu muc
- config: chua cac cau hinh theo moi truong phat trien
- helpers: chua ben thu ba (firebase, axios)
- utils: chua cac style (validate, ..)
- .env: chua root API

2. Navigation
- Can tuan thu cac buoc cai dat navigation
- Cai react-nativation global, navigationContainer theo huong dan:
  (Link: https://reactnavigation.org/docs/getting-started/)
- Stack-Navigator:
  + Cai dat react-native-gesture-handler !
    (Hien loi: ERROR [react-native-gesture-handler] react-native-gesture-handler module was not found ! (Bao do tren may ao))
    (Fix: stop run metro - cd android - ./graplew clean - npx react-native start & npx react-native run-android)
- Tao HomeNavigator: tao component HomeNavigator, tao const cac Screens demo, ghep navigator truoc
- Can [react-native-reanimated] de run navigation:
  + Link config: https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/
  + File: babel.config.js

3. Man hinh Login
4. Man hinh Register