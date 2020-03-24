//Libary
import React, {Component} from 'react';

//Stack NAvigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Screen
import FireStoreDemo from '../screen/FireStoreDemo';
import PushNotifyDemo from '../screen/PushNotifyDemo';

const AuthStack = createStackNavigator(
  {
    FireStoreDemo: {screen: FireStoreDemo},
    PushNotifyDemo: {screen: PushNotifyDemo},
  },
  {
    initialRouteName: 'PushNotifyDemo',
    headerMode: 'none',
  },
);

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;
