import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  /**
   * root của logout là từ drawer
   * -> nên khai báo authDispatch từ drawer và truyền dần vào trong đến hàm gọi action logout()
   */
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
