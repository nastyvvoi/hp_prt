import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_messagingSenderId,
    appId: process.env.FIREBASE_appId,
    measurementId: process.env.FIREBASE_measurementId
  }
  firebase.initializeApp(config)
  firebase.firestore().settings({timestampsInSnapshots: true})
  Vue.prototype.$db = firebase.firestore()
  Vue.prototype.$firestorage = firebase.storage()
}