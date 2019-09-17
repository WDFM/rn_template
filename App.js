/*
 * @Author: 凹成文
 * @Date: 2019-09-17 16:06:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-17 17:09:37
 * @Description: app
 */
import React from 'react';
import { Provider as Aprovider } from '@ant-design/react-native';
import Routes from './routes';

export default class App extends React.Component {
  render() {
    return (
      <Aprovider>
        <Routes />
      </Aprovider>
    );
  }
}
