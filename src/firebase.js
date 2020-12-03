import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyCcBFM9B5uzrgqcPeQxglNjqPKkqU_Jqk0",
    authDomain: "inst-clown.firebaseapp.com",
    databaseURL: "https://inst-clown.firebaseio.com",
    projectId: "inst-clown",
    storageBucket: "inst-clown.appspot.com",
    messagingSenderId: "397156487689",
    appId: "1:397156487689:web:9256cdd01b9aa1dfaa1ed8"
})

const db = firebase.firestore()
db.settings({timestampsInSnapshots:true})

const auth = firebase.auth()

const storage = firebase.storage()

export {db, auth, storage}