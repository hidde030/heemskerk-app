import React, { Component } from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
        <Button 
          title='Begin wedstrijd'
          onPress={() => this.props.navigation.push('Select')}
          titleStyle={{
            color: 'white'
          }}
          type='clear'
        />
        </View>
        <View style={styles.button}>
         <Button
          title='Speleroverzicht(feature)'
          onPress={() => this.props.navigation.push('Detail')}
          titleStyle={{
            color: 'white'
          }}
          type='clear'
        />
        </View>
        <View style={styles.button}>
         <Button
          title='Leaderbord(feature)'
          onPress={() => this.props.navigation.push('FireTest')}
          titleStyle={{
            color: 'white'
          }}
          type='clear'
        />
        </View>
        <View style={styles.button}>
         <Button
          title='Bezoek webshop'
          onPress={() => Linking.openURL('https://www.heemskerk-sport.nl/')}
          titleStyle={{
            color: 'white'
          }}
          type='clear'
        />
        </View>

        <View style={styles.button}>
         <Button
          title='log uit'
          onPress={() => Linking.openURL('Loguit')}
          titleStyle={{
            color: 'white'
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
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    textTransform: 'uppercase',
    
  },
  button: {
    height:50,
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 6,
   
  }
})

export default withFirebaseHOC(Home)
