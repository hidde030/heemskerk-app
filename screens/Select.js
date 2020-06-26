import React, { Component } from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'

import Button from 'react-native-button';
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
    constructor(props, context) {
        super(props, context);
        this.state = {
            isDisabled: false
        }
    }
    goToScore = () => this.props.navigation.navigate('Score')



    _handlePress() {
        this.setState({
            isDisabled: true
        });
        console.log('Now, button disabled');
    }
    render() {
        const { isDisabled } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.texts}>SPEELWIJZE</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        style={{ fontSize: 20, color: 'white', padding: 10}}
                        styleDisabled={{ color: 'white' }}
                        disabled={isDisabled}
                        containerStyle={{ borderRadius: 18,  backgroundColor: 'black', width: 120, marginRight: 10, }}
                        disabledContainerStyle={{ backgroundColor: 'black', opacity: 0.5, }}
                        onPress={() => this._handlePress()}
                    >
                    Met Tijd
                    </Button>
                    <Button
                        style={{ fontSize: 20, color: 'white' }}
                        styleDisabled={{ color: 'white' }}
                        disabled={isDisabled}
                        containerStyle={{ overflow: 'hidden', borderRadius: 18, backgroundColor: 'black', width: 120, }}
                        disabledContainerStyle={{ backgroundColor: 'black', opacity: 0.5, }}
                        onPress={() => this._handlePress()}
                    >
                    Zonder Tijd
                    </Button>
                </View>
                {/* postion absolute is de text */}
                <Text style={styles.text}>Spelers</Text>
                <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center'}}>
                    <Button
                        style={{ fontSize: 20, color: 'white' }}
                        styleDisabled={{ color: 'white' }}
                        disabled={isDisabled}
                        containerStyle={{ padding: 10, height: 45, margin: 10, overflow: 'hidden', borderRadius: 25, backgroundColor: 'black', width: 100, marginLeft: 100, marginTop: 50, }}
                        disabledContainerStyle={{ backgroundColor: 'black', opacity: 0.5, }}
                        onPress={() => this._handlePress()}
                    >
                        2
                    </Button>
                    <Button
                        style={{ fontSize: 20, color: 'white' }}
                        styleDisabled={{ color: 'white' }}
                        disabled={isDisabled}
                        containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 25, backgroundColor: 'black', width: 100, marginRight: 100, marginTop: 50, }}
                        disabledContainerStyle={{ backgroundColor: 'black', opacity: 0.5, }}
                        onPress={() => this._handlePress()}
                    >
                        4
                    </Button>
                </View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
                   <Button
                        style={{ fontSize: 20, color: 'white' }}
                        styleDisabled={{ color: 'white' }}

                        containerStyle={{  padding: 10, height: 45, overflow: 'hidden', borderRadius: 5, backgroundColor: 'black', width: 150,}}
                        disabledContainerStyle={{ backgroundColor: 'black', opacity: 0.5, }}
                        onPress={this.goToScore}
                    >
                        BETALEN
                    </Button>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        margin: 'auto',
        textAlign: 'center',
        marginTop: 60
    },
    buttonContainer: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    speler: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    texts: {
        display: 'flex',
        textAlign: 'center',
        top: 0,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30
    },
   text: {
    display: 'flex',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
    }
})


export default withFirebaseHOC(Select);