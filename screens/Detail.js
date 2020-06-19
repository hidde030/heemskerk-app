import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import 'firebase/firestore';
import { withFirebaseHOC } from '../config/Firebase'

class Detail extends Component {

  constructor(props) {
    super(props);

    this.ref = firebase.firestore().collection('scores');
    this.state={
      goal : []
  }
  }
  
  componentDidMount(){
    this.unsubscribe = this.ref.onSnapshot(this.latestGoals);
  }
  
  
  
  latestGoals = (GoalsSnapShot) =>{
    const score = [];
    GoalsSnapShot.forEach((doc) => {
    const {name, email, date, goal} = doc.data();
    score.push({
        key: doc.id,
        name,
        email,
        date,
        goal
      });
    });
    this.setState({
      goal :[],
    });
  }
  render() {
    const {goal} = this.state
    return (  
      <View>
        {goal}
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
