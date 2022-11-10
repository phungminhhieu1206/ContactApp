/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {useState} from 'react';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {navigationRef} from './RootNavigator';

const AppNavContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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
