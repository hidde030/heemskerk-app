import React, { Component } from 'react'
import { StyleSheet, Text, View, Linking} from 'react-native'
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    return (
      
      <View style={styles.container}>
      <Text style={{fontSize:35,fontWeight:"bold", textAlign:'center', marginBottom:50,  textTransform: 'uppercase',paddingTop:20}}>Maak je keuze</Text>
        <View style={styles.button}>
        <Button 
          title='Begin wedstrijd'
          onPress={() => this.props.navigation.push('Select')}
          titleStyle={{
            color: 'white',
            textTransform: 'uppercase',
          }}
          type='clear'
        />
        </View>
        {/* <View style={styles.button}>
         <Button
          title='Speleroverzicht(feature)'
          onPress={() => this.props.navigation.push('Detail')}
          titleStyle={{
            color: 'white'
          }}
          type='clear'
        />
        </View> */}
        <View style={styles.button}>
         <Button
          title='Leaderbord'
          onPress={() => this.props.navigation.push('Leaderbord')}
          titleStyle={{
            color: 'white',
            textTransform: 'uppercase',
          }}
          type='clear'
        />
        </View>
        <View style={styles.button}>
         <Button
          title='Bezoek webshop'
          onPress={() => Linking.openURL('https://www.heemskerk-sport.nl/')}
          titleStyle={{
            color: 'white',
            textTransform: 'uppercase',
          }}
          type='clear'
        />
        </View>

        <View style={styles.button}>
         <Button
          title='log uit'
          onPress={() => Linking.openURL('Loguit')}
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
    
    justifyContent: 'center',
 
    backgroundColor: 'white',
    textTransform: 'uppercase',
    
  },
  button: {
    height:50,
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 6,
    textTransform: 'uppercase',
  }
})

export default withFirebaseHOC(Home)
