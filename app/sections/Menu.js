import React from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View } from 'react-native';



export class Menu extends React.Component {

    onPress = () => {
        Alert.alert('You have tapped the button');
    }
 
    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.bottomRow}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.onPress}
                    >
                        <Text style={styles.buttonText}>Lessons</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.onPress}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomRow}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.onPress}
                    >
                        <Text style={styles.buttonText}>Blog</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.onPress}
                    >
                        <Text style={styles.buttonText}>Contact</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomRow}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.onPress}
                    >
                        <Text style={styles.buttonText}>Blog</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.onPress}
                    >
                        <Text style={styles.buttonText}>Contact</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: { flex: 6, backgroundColor: '#36505a' },
    bottomRow: { flex: 2, flexDirection: 'row', alignItems: 'center', borderColor : '#ffffff', borderBottomWidth:1},
    buttonStyle: {backgroundColor: '#36505a', height:'50%',width:'50%', justifyContent:'center', alignItems:'center'},
    buttonText: {color : '#ffffff', fontSize:18},
});