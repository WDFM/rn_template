/*
 * @Author: 凹成文
 * @Date: 2019-09-17 16:40:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-17 17:20:55
 * @Description: routes
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/Home';
import Other from './pages/Other';

const stackContainer = createStackNavigator(
  {
    Home,
    Other,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
);

const Routes = createAppContainer(stackContainer);

export default Routes;
