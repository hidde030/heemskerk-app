import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const Firebase = {
  // auth
  loginWithEmail: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  signupWithEmail: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  signOut: () => {
    return firebase.auth().signOut()
  },
  checkUserAuth: user => {
    return firebase.auth().onAuthStateChanged(user)
  },
  passwordReset: email => {
    return firebase.auth().sendPasswordResetEmail(email)
  },
  // firestore
  createNewUser: userData => {
    return firebase
      .firestore()
      .collection('users')
      .doc(`${userData.uid}`)
      .set(userData)
  },
  // createNewScore: userData =>{
  //   return firebase
  //     .firestore()
  //     .collection('scores')
  //     .doc('OuHpzA3vFSRsEardcdgPTkptLZp1')
  //     .set(    
  //        {
  //       name: 'Anbu Selvan',
  //       goal: '1'
  //       },)
  // }

  
//   createNewScore: Goal => {
//     return firebase
//     .firestore()
//     .collection('scores')
//     .doc(`${goal.id}`)
//     .set(goal)
//  }
}

export default Firebase
