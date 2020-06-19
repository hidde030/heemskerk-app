
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyALy2CShgEn3I9qIKmW-UdbB1jG0QnRPPA',
    authDomain: 'heemskerkhetbureau.firebaseapp.com',
    databaseURL: 'https://heemskerkhetbureau.firebaseio.com/',
    projectId: 'heemskerkhetbureau',
    storageBucket: 'heemskerkhetbureau.appspot.com',
    messagingSenderId: '703677055663',
    appId: '1:703677055663:web:0d61aeca5ecd60eae50a5a'
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;