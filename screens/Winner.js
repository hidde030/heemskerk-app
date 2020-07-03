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

  goToLeader = () => this.props.navigation.navigate('Leaderbord')

  render() {
    return (
      <View style={styles.container}>
        <View style={{ display: 'flex' }}>
          <Text style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', textAlignVertical: 'top', fontSize: 20, fontWeight: 'bold' }}>Ronde 2</Text>
          <Text style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', textAlignVertical: 'top',fontWeight: 'bold',fontSize: 20, }}>GEWONNEN DOOR: </Text>
          
        </View>
        <View style={{ display: 'flex',justifyContent: 'center', alignItems: 'center',  }}>
          <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={{display: 'flex', width: 132, height: 132, }} />
            <Text>KEVIN!</Text>
        </View>
        
<View>
  <Text style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', textAlignVertical: 'top',fontWeight: 'bold' }} >GEWONNEN WEDSTRIJDEN</Text>
</View>
        <View style={styles.button}>
          <Button
            title='BEKIJK LEADERBOARD'
            style={{ fontSize: 20, color: 'white' }}
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