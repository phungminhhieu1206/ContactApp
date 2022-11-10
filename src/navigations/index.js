/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>Hello world</Text>
        <Icon name="settings" size={22} color="red" />
      </SafeAreaView>
    </NavigationContainer>
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
