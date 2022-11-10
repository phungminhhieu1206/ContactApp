/* eslint-disable react/self-closing-comp */
import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/routeNames';
import LoginScreen from '../screens/LoginScreen';

const AuthStack = createStackNavigator();

const RegisterScreen = () => {
  return (
    <View>
      <Text>Register Screen</Text>
    </View>
  );
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={REGISTER} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
