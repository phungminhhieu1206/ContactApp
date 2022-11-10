/* eslint-disable react/self-closing-comp */
import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const LoginScreen = () => {
  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  );
};

const RegisterScreen = () => {
  return (
    <View>
      <Text>Register Screen</Text>
    </View>
  );
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login Screen"
        component={LoginScreen}></AuthStack.Screen>
      <AuthStack.Screen
        name="Register Screen"
        component={RegisterScreen}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
