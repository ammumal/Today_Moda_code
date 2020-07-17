import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

export default class Weather extends React.Component{
    render(){
        const {height, width}=Dimensions.get('screen');
        return (
            <>
            <View style={styles.container}>
                <Image style={styles.weather_img}
                width={width}
                height={height/4}
                source={{
                    uri: 'https://raw.githubusercontent.com/AYoungSn/Python_project_team6/master/Webcrawling/static/sunny.png',
                }}
                />
                <View style={styles.w_info}>
                    <Text>체감온도:</Text>
                </View>
            </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DFFFFF',
        flexDirection: 'row',
        padding: 5,
        margin: 5,
        borderRadius: 5,
    },weather_img: {
        flex:3,
        margin: 10,
        resizeMode: 'contain',
        alignItems: 'flex-start',
    }, w_info: {
        flex:3,
        textAlign: 'left',
        flexDirection: 'column',
        marginTop: 10,
    }
});