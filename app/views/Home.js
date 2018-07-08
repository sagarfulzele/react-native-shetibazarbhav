import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from '../sections/Header.js'
import { Menu } from '../sections/Menu.js'

export class Home extends React.Component{

    render() 
    { 
        return(
            <View style={styles.container}>
                
                <Header message="Hello Sagar" />
                
                <Menu />
            </View>  
        ); 
    }

}
    

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop:30 },
    });