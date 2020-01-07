import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'

class Detail extends Component {

  handleSignout = async () => {
    try {
      await this.props.firebase.signOut()
      this.props.navigation.navigate('Auth')
    } catch (error) {
      console.log(error)
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text >score</Text>
        <Button
          title='Signout'
          titleStyle={{
            color: '#F57C00'
          }}
          type='clear'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default withFirebaseHOC(Detail)
