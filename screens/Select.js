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
                <Text style={styles.texts}>SPEELWIJZEN</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        style={{ fontSize: 20, color: 'white' }}
                        styleDisabled={{ color: 'white' }}
                        disabled={isDisabled}
                        containerStyle={{ height: 45, overflow: 'hidden', borderRadius: 18,  backgroundColor: 'black', width: 150, marginLeft: 20, marginTop: 50, }}
                        disabledContainerStyle={{ backgroundColor: 'black', opacity: 0.5, }}
                        onPress={() => this._handlePress()}
                    >
                        Met Tijd
                    </Button>
                    <Button
                        style={{ fontSize: 20, color: 'white' }}
                        styleDisabled={{ color: 'white' }}
                        disabled={isDisabled}
                        containerStyle={{ height: 45, overflow: 'hidden', borderRadius: 18, backgroundColor: 'black', width: 150, marginRight: 20, marginTop: 50, }}
                        disabledContainerStyle={{ backgroundColor: 'black', opacity: 0.5, }}
                        onPress={() => this._handlePress()}
                    >
                        Zonder Tijd
                    </Button>
                </View>
                {/* postion absolute is de text */}
                <Text style={styles.text}>Spelers</Text>
                <View style={styles.speler}>

                    <Button
                        style={{ fontSize: 20, color: 'white' }}
                        styleDisabled={{ color: 'white' }}
                        disabled={isDisabled}
                        containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 25, backgroundColor: 'black', width: 100, marginLeft: 100, marginTop: 50, }}
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
                   <Button
                        style={{ fontSize: 20, color: 'white' }}
                        styleDisabled={{ color: 'white' }}
                      
                        containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 5, backgroundColor: 'black', width: 150, marginLeft: 130, marginTop: 100, }}
                        disabledContainerStyle={{ backgroundColor: 'black', opacity: 0.5, }}
                        onPress={this.goToScore}
                    >
                        BETALEN
                    </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginTop: 60
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    speler: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        position: 'absolute',
        left: 150,
        top: 100,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30



    },
    texts: {
        position: 'absolute',
        left: 115,
        top: 0,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30



    }



})


export default withFirebaseHOC(Select)
