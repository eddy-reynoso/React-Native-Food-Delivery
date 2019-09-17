import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import Root from './Root';

const AuthStack = createSwitchNavigator(
  {
    SignUpScreen: SignUpScreen,
    SignInScreen: SignInScreen,
  },
  {
    initialRouteName: 'SignUpScreen',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoadingScreen,
      Root,
      AuthStack,
    },
    {
      initialRouteName: 'AuthLoadingScreen',
    },
  ),
);
