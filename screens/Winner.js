import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'

// const image = { uri: "https://reactjs.org/logo-og.png" };
class Winner extends Component {

  // constructor(props, context) {
  //   super(props, context);
  //   this.state = {
  //     isDisabled: false
  //   }
  // }
  // constructor() {
  //   super();
  //   this.firestoreRef = firebase.firestore().collection('scores');
  //   this.state = {
  //       isLoading: true,
  //       winnerArr: []
  //   };
  // }

  goToLeader = () => this.props.navigation.navigate('Home')

  render() {
    return (
      <View style={styles.container}>
        <View style={{ display: 'flex' }}>
          <Text style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', textAlignVertical: 'top', fontSize: 20, fontWeight: 'bold' }}>Ronde 2</Text>
          <Text style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', textAlignVertical: 'top', fontWeight: 'bold', fontSize: 20, marginBottom: 60, }}>GEWONNEN DOOR: </Text>

        </View>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 60, }}>
          <Image source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
            style={{ display: 'flex', width: 132, height: 132, borderWidth: 8, borderColor: 'black' }} />
          <Text>KEVIN!</Text>
        </View>

        <View>
          <Text style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', textAlignVertical: 'top', fontWeight: 'bold', fontSize: 20, marginBottom: 10,}} >GEWONNEN WEDSTRIJDEN</Text>
        </View>
        <View style={{ width: 123, alignSelf: 'center', marginRight: 10, height: 70, backgroundColor: '#000', marginBottom:40 }} >
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold", color: '#fff', lineHeight: 60 }}>
            2
          </Text>
        </View>
        <View style={styles.button}>
          <Button
            title='TERUG NAAR HOME'
            style={{ fontSize: 20, color: 'white', }}
            onPress={this.goToLeader}

            type='clear'
          >

          </Button>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 60
  },
  button: {
    height: 50,
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 6,

    textTransform: 'uppercase',
  },


  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
})


export default withFirebaseHOC(Winner);