/*
 * @Author: 凹成文
 * @Date: 2019-09-17 16:42:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-17 17:39:04
 * @Description: home
 */
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { WingBlank, List, WhiteSpace } from '@ant-design/react-native';

export default class Home extends React.Component {
  render() {
    const list = [
      { depName: '@ant-design/react-native', version: '^3.1.15' },
      { depName: '@react-native-community/async-storage', version: '^1.6.1' },
      { depName: 'react', version: '16.8.6' },
      { depName: 'react-native', version: '0.60.5' },
      { depName: 'react-native-gesture-handler', version: '^1.4.1' },
      { depName: 'react-native-reanimated', version: '^1.2.0' },
      { depName: 'react-native-vector-icons', version: '^6.6.0' },
      { depName: 'react-navigation', version: '^4.0.5' },
      { depName: 'react-navigation-stack', version: '^1.7.3' },
      { depName: 'react-redux', version: '^7.1.1' },
      { depName: 'redux', version: '^4.0.4' },
    ].map((val, index) => (
      <List.Item key={index}>
        <Text style={style.item}>{val.depName}</Text>
        <List.Item.Brief>{val.version}</List.Item.Brief>
      </List.Item>
    ));

    return (
      <View>
        <WingBlank>
          <WhiteSpace />
          <Text style={style.title}>通用RN模板框架</Text>
          <WhiteSpace />
        </WingBlank>
        <ScrollView>
          <List renderHeader={'依赖列表'}>{list}</List>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#333',
  },
  item: {
    fontSize: 16,
    color: '#333',
  },
});
