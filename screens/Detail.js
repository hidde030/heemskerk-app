
import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View,Text } from 'react-native';
import { ListItem } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'
import firebase from 'firebase';
import 'firebase/firestore';

class Leaderbord extends Component {

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

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { name, goal, } = res.data();
      userArr.push({
        key: res.id,
        res,
        name,
        goal,
     
      });
    });
    this.setState({
      userArr,
      isLoading: false,
   });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <ScrollView style={styles.container}>
          {
            this.state.userArr.map((item, i) => {
              return (
                <View  key={i}>
                 
            
                  <Text>
                  {item.name}
                  {item.goal}
                  </Text>
                  </View>
              );
            })
          }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default withFirebaseHOC(Leaderbord);