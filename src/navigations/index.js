/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {useContext, useState} from 'react';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {navigationRef} from './RootNavigator';
import {GlobalContext} from '../context/Provider';

const AppNavContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const {
  //   authState: {isLoggedIn},
  // } = useContext(GlobalContext);

  // console.log(isLoggedIn);

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

/**
 * App chia thanh 3 loai man hinh:
 * Home, Drawer va Auth
 * Auth chua cac man hinh truoc authenticated, sau authen thi ko xuat hien cac man nay
 * App ko co bottom tab
 */

// screens>>>Home>>>Drawer
// screens>>>Auth>>>

export default AppNavContainer;
