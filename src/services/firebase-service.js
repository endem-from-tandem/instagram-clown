import {db, auth} from '../firebase'
import firebase from 'firebase'
export default class FirebaseService{
    
    // D B
    getDocsFromCollection(collection){
        return db.collection(collection)
          .get()
          .then(sn => {
              const docs = sn.docs.map(doc => ({
                  id: doc.id,
                  ...doc.data()
              }))
              return docs
          })
          .catch(err => {
              console.log('Error getting documents', err)
          })
    }

    getDocFromCollection(collection, docId){
        return db.collection(collection).doc(docId)
        .get()
        .then(doc => {
            if (doc.exists) {
               // console.log("Document data:", doc.data());
                return doc.data()
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }        
        })

    }
    
    getHomePostsByDate(){
        return db.collection('home-posts').orderBy('date',  'desc')
        .get()
        .then(snapshot => {
            const data = snapshot.docs.map(document => ({...document.data(), id:document.id}))
            return data
        })
    }


    userLoginWithEmail(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    userSignUpWithEmail(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    addUserToFirestore(user){
        return db.collection("users").doc(user.id).set({
            ...user
        })
    }

    updateUserInFirestore(user, updates){
        return db.collection("users").doc(user.id).update({
            ...updates
        })
    }

    userSignOut(){
        firebase.auth().signOut()
    }

    getCurrentUser(){
        const user = firebase.auth().currentUser
        if(user != null){
            const USER = {
               name:user.displayName,
               id:user.uid,
               email:user.email,
               avatar:user.photoURL,
               verified:user.emailVerified
            }
            return USER
        }
    }
}
