import React from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {Header} from '../sections/Header.js'

export class Contact extends React.Component{
    static nagivationOptions={
        header=null
    };

    render(){
      <View style={styles.container}> 
       <Header message="Press to login" />
        <Text style={{flex:8}}>conact form</Text>
        <Text style={{flex:6}}>conact form</Text>
   </View>  
        
    } 
}


const styles = StyleSheet.create({
    container: { flex: 1, paddingTop:30 },
    });