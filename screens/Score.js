import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, View, Linking, Picker } from 'react-native'

import { withFirebaseHOC } from '../config/Firebase'

class Score extends Component {
    state = {
        language: 'java',
    };
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.time}>
                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', alignSelf: 'center', }}>REST. TIJD</Text>
                </View>
                <View style={{}}>
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row',  justifyContent: 'space-around' }}>
                        <Text style={{ textAlign: 'center', width: '100%', fontSize: 20 }}>Score</Text>
                        <View style={{ width: 100, alignSelf: 'center', height: 100, backgroundColor: '#000' }}>
                            <Picker
                                selectedValue={this.state.language}
                                style={{ height: 100, width: 100, color: 'white', alignItems: 'center' }}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ language: itemValue })
                                }>
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                                <Picker.Item label="6" value="6" />
                            </Picker>
                        </View>
                        <View style={{ width: 100, height: 100, backgroundColor: '#000', }} >
                            <Picker
                                selectedValue={this.state.language}
                                style={{ height: 100, width: 100, color: 'white' }}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ language: itemValue })
                                }>
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                                <Picker.Item label="6" value="6" />
                            </Picker>


                        </View>
                        
                    </View>
                </View>




                <View style={{}}>
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row',  justifyContent: 'space-around' }}>
                        <View style={{ width: 100, height: 50 }}>
                         <Text>JESSE</Text>
                        </View>
                        <View style={{ width: 100, height: 50}} >
                        
                        <Text>KEVIN</Text>

                        </View>
                        
                    </View>
                </View>

                    <View style={{ flexDirection: 'row'  }}>
                        <Text style={styles.text}>GESPEELDE WEDSTRIJDEN</Text>

                    </View>
           

            </View>




        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        fontSize: 2
    },
    time: {
        height: '20%',
        backgroundColor: '#000',
        alignItems: 'stretch',
    },
    column: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        width: '100%',
        fontSize: 15 
    }


})


export default withFirebaseHOC(Score)
