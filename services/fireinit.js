
import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var config = {
  apiKey: "AIzaSyALKHUrgwjZ27ny2qptJqJC-JLXtV2UVmQ",
  authDomain: "ilshincorp13-c0dfe.firebaseapp.com",
  databaseURL: "https://ilshincorp13-c0dfe-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ilshincorp13-c0dfe",
  storageBucket: "ilshincorp13-c0dfe.appspot.com",
  messagingSenderId: "1052498301783",
  appId: "1:1052498301783:web:d99024d92211f6adc7a412",
  measurementId: "G-Y2NWZ20ER0"
};
  
if (!firebase.apps.length) {
  firebase.initializeApp(config)
  firebase.firestore().settings({timestampsInSnapshots: true})
}
export const auth = firebase.auth();
export const DB = firebase.firestore();
export default firebase
export const firestorage = firebase.storage();
