import React, { Component } from 'react';
import {createSwitchNavigator} from 'react-navigation'
//Switch Components
import LoginStack from './src/components/Screens/LoginStack'
import MainTabStack from './src/components/Screens/MainTabStack'
//Solutionized the Warning
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends Component {
  render() {
    return (
      <Switchings/>
    );
  }
}

const Switchings = createSwitchNavigator(
  {
  Login:LoginStack,
  MainTab: MainTabStack
  },
  {
    initialRouteName:"Login"
  }
)
