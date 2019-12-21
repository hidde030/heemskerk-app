import React, { Component } from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'

class Select extends Component {
    //dit doet niks nog 
    // static navigationOptions = {
    //     title: 'Home',
    //     headerStyle: {
    //       backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //   }
    render() {
        return (
            
            <View style={styles.container}>
                <View style={styles.button} />
                <View style={styles.button} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      button: {
        backgroundColor: 'blue',
        width: '40%',
        height: 80,
        margin: 20,
        borderRadius: 25,
      }

})


export default withFirebaseHOC(Select)
  