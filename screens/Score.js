import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, View, Linking, ActivityIndicator } from 'react-native'
import { ListItem, Button } from 'react-native-elements'

import firebase from 'firebase';
import 'firebase/firestore';
import { withFirebaseHOC } from '../config/Firebase'
import CountDown from 'react-native-countdown-component';
import { AuthSession } from 'expo';


class Score extends Component {
    
    constructor() {
        super();
        
        this.firestoreRef = firebase.firestore().collection('scores');
        this.state = {
            isLoading: true,
            userArr: []
        };
    }

    componentDidMount() {
        this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getCollection = (querySnapshot) => {
        const userArr = [];

        querySnapshot.forEach((res) => {

            // const { uid } = response.user
            const { name, goal } = res.data();
            // console.log(goal, name)
            userArr.push({
                key: res.id,
                res,
                goal,
                name


            });
        });
        this.setState({
            userArr,
            isLoading: false,
        });
    }
    goToWinner = () => this.props.navigation.navigate('Winner')
    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.time}>
                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', alignSelf: 'center', }}>REST. TIJD</Text>

                    <CountDown
                        size={20}
                        until={600}
                        onFinish={() => alert('De wedstrijd is afgelopen')}
                        digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#000', marginTop: 9 }}
                        digitTxtStyle={{ color: '#000' }}
                        timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
                        separatorStyle={{ color: '#fff' }}
                        timeToShow={['M', 'S']}
                        timeLabels={{ m: null, s: null }}
                        showSeparator
                    />
                </View>
                <View style={{}}>
                    <Text style={{ textAlign: 'center', width: '100%', fontSize: 20, marginTop: 20, fontWeight: "bold" }}>Score</Text>
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>

                        {
                            this.state.userArr.map((item, i) => {

                                return (
                                    <View style={{ width: 60, alignSelf: 'center', marginRight: 10, height: 60, backgroundColor: '#000' }} key={i} >


                                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold", color: '#fff', lineHeight: 60 }}>
                                            {item.goal}
                                        </Text>
                                    </View>
                                );
                            })
                        }


                        {
                            this.state.userArr.map((item, i) => {
                                return (
                                    <View style={{ width: 60, alignSelf: 'center', marginRight: 10, height: 60, backgroundColor: '#000' }} key={i}>
                                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold", color: '#fff', lineHeight: 60 }}>
                                            {item.goal}
                                        </Text>
                                    </View>
                                );
                            })
                        }


                    </View>
                </View>
                <View style={{}}>
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', fontWeight: "bold" }}>
                        <View style={{ width: 100, height: 50 }}>
                            {
                                this.state.userArr.map((item, i) => {
                                    return (
                                        <View style={{ color: '#000', width: 100, height: 50 }} key={i} >


                                            <Text style={{ color: '#000', width: 100, height: 50, marginLeft: 40 }}>
                                                {item.name}
                                            </Text>
                                        </View>
                                    );
                                })
                            }

                        </View>
                        <View style={{ width: 100, height: 50 }} >
                            <Text>KEVIN</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>{`GESPEELDE\nWEDSTRIJDEN`}</Text>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                    <View style={styles.square}></View>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                    <Text style={styles.punten}>1</Text>
                    <Text style={styles.punten}>2</Text>
                    <Text style={styles.punten}>3</Text>
                    <Text style={styles.punten}>4</Text>
                    <Text style={styles.punten}>5</Text>
                    <Text style={styles.punten}>6</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>{`RESTERENDE BALLEN`}</Text>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                </View>
                <View style={styles.button}>
                    <Button
                        title='winner'
                        onPress={this.goToWinner}
                        titleStyle={{
                            color: 'white',
                            textTransform: 'uppercase',
                        }}
                        type='clear'
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
    
    },
    time: {
        height: '20%',
        height: 'auto',
        backgroundColor: '#000',
        padding: 15,
        alignItems: 'stretch',
    },
    column: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        width: '100%',
        fontSize: 15,
        fontWeight: "bold"
    },
    square: {
        width: 25,
        height: 25,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 5
    },

    circle: {
        width: 25,
        height: 25,
        margin: 5,
        borderWidth: 3,
        borderRadius: 25
    },

    punten: {
        width: 25,
        height: 25,
        margin: 5,
        left: 6
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: 50,
        margin: 20,
        backgroundColor: 'black',
        borderRadius: 6,
        textTransform: 'uppercase',
    }


})


export default withFirebaseHOC(Score)
