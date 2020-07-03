import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View,Text} from 'react-native';
import { ListItem,Avatar } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'
import firebase from 'firebase';
import 'firebase/firestore';

class Leaderbord extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('users');
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
      
      const { name, email, avatar_url,scores,goals} = res.data();
      // console.log(avatar_url)
      userArr.push({
        key: res.id,
        res,
        name,
        email,
        avatar_url,
        scores,
        goals
     
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
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  subtitleNumberOfLines={25}
                  containerStyle={styles.item}
                  title={item.name}
                  leftAvatar={<Avatar rounded large source={{uri: item.avatar_url}} height={80} width={80}/>}
                  // leftAvatar={{ source: { uri: item.avatar_url } } height={'100'} width={'100'}}
                  // subtitle={{<View><Text>3214</Text></View>}} {item.scores}
                  rightSubtitle={item.goals}
                  rightTitle={`Goals`}
                  onPress={() => {
                    this.props.navigation.navigate('', {
                      userkey: item.key
                    });
                  }}></ListItem>
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
  },
  // item: {
  //   backgroundColor: '#FFF',
  //   padding: 40,
  //   marginVertical: 4,
  //   marginHorizontal: 16,
  // },

})

export default withFirebaseHOC(Leaderbord);