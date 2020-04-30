import React, { Component } from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'

import Button from 'react-native-button';
import { withFirebaseHOC } from '../config/Firebase'

class Score extends Component {

    render() {

        return (
            <View style={styles.container} >
                <Text>scores page</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 100, height: 100, backgroundColor: 'powderblue', margin:20}}></View>
                <View style={{width: 100, height: 100, backgroundColor: 'skyblue', margin:20}} ></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginTop: 60,
        fontSize: 2
    }



})


export default withFirebaseHOC(Score)
