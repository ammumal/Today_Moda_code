/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';
import styled from 'styled-components/native';
import Weather from './Weather';
import Keyword from './Keyword';
import Shopping from './Shopping';

const Header = styled.Text`
color: #000000;
font-size: 20px;
text-align: center;
align-items: center;
justify-content: center;
margin: 9px;
`;

interface Props {}
interface State {}

export default class App extends React.Component<Props,State>{
  render(){
    return (
      <SafeAreaView>
        <View style={styles.header}>
        <Header>Today's мода</Header>
        
        </View>
        <ScrollView>
          <View style={styles.weather}>
            <Weather/>
          </View>
          <View style={styles.keyword}>
            <Keyword/>
          </View>
          <View style={styles.shopping}>
          <Shopping/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FAFAFA',
    height: 45
  },
  weather: {
    
  },
  keyword: {
    backgroundColor: '#FAFAFA',
    padding: 5,
    margin: 5,
  },
  shopping: {
    backgroundColor: '#DDDDDD',
    padding: 5,
    margin: 5,
  },
})