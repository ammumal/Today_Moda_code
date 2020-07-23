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
  Text,
} from 'react-native';
import styled from 'styled-components/native';
import Weather from 'Weather';
import Keyword from 'Keyword';
import Shopping from 'Shopping';
import Geolocation from '@react-native-community/geolocation';

const API_KEY = "b86c474546c60f7c146da98180738950";

const Header = styled.Text`
color: #000000;
font-size: 25px;
text-align: center;
align-items: center;
justify-content: center;
margin: 9px;
font-weight: bold;
`;

interface Props {}
interface State {}

export default class App extends React.Component<Props,State>{
  state= {
    isLoaded: false,
    city: '',
    weatherName: '',
    cityTemp: 0,
    error: null,
    feels: 0
  };

  //위치 정보 확인
  componentDidMount(){
    Geolocation.getCurrentPosition(
      position =>{
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'error'
        })
      }
    );
  }
  _getWeather = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        cityTemp: json.main.temp,
        weatherName: json.weather[0].main,
        isLoaded: true,
        city: json.name,
        feels: json.main.feels_like
      })
    });
  }
  render(){
    const { isLoaded, city, weatherName, cityTemp, error, feels } = this.state;

    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Header>Today's мода</Header>
        </View>
        <ScrollView>
          <View style={styles.weather}>
            {isLoaded ?
            <Weather city={city} weatherName={weatherName} temp={Math.floor((cityTemp-273.15)*10)/10} feels={Math.floor((feels-273.15)*10)/10}/>
            : error?<Text>{error}</Text>: null}
          </View>
          <View style={styles.keyword}>
            {/* 키워드 영역 */}
            <Keyword/>
          </View>
          <View style={styles.shopping}>
            {/* 패션 이미지 영역 */}
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
    height: 55
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