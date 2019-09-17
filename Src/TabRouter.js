import HomeScreen from './screens/HomeScreen';
import OtherScreen from './screens/OtherScreen';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  HomeScreen: HomeScreen,
  OtherScreen: OtherScreen,
});

export default createAppContainer(TabNavigator);
