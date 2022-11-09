Build App ReactNative
- intercepter giúp chặn người dùng khi hết hạn token
- dùng SafeAreaView thay vì dùng View

1. Cau truc thu muc
- config: cau hinh theo moi truong phat trien
- helpers: chua ben thu ba (firebase, axios)
- utils: chua cac style (validate, ..)
- .env: chua root API

2. Navigation
- Cai react-nativation global, navigationContainer theo huong dan:
  (Link: https://reactnavigation.org/docs/getting-started/)
- Stack-Navigator:
  + Cai dat react-native-gesture-handler !
    (Hien loi: ERROR [react-native-gesture-handler] react-native-gesture-handler module was not found ! (Bao do tren simulator))
    (Fix: stop run metro - cd android - ./graplew clean - rerun metro & run-android)
- 
