import React, { Component } from 'react'
import { StyleSheet, Text, View, Linking} from 'react-native'
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'

class Winner extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isDisabled: false
        }
    }
    goToLeader = () => this.props.navigation.navigate('Leaderbord')

    static navigationOptions = {
        title: 'Winner'
      };
  render() {
    return (
        <View style={styles.container}>
            <Text>Ronde 2</Text>
            <Text>GEWONNEN DOOR:</Text>

            <Button
                        style={{ fontSize: 20, color: 'white' }}
                        styleDisabled={{ color: 'white' }}
                      
                        containerStyle={{ display: 'flex', padding: 10, height: 45, overflow: 'hidden',  backgroundColor: 'black', width: 150, margin: 'auto' }}
                        disabledContainerStyle={{ backgroundColor: 'black', opacity: 0.5, }}
                        onPress={this.goToLeader}
                    >
                      BEKIJK LEADERBOARD
                    </Button>
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
     
      
    }
  })


export default withFirebaseHOC(Winner);