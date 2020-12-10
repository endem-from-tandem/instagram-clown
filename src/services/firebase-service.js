import {db, auth} from '../firebase'
import firebase from 'firebase'
export default class FirebaseService{
    
    //auth
    google_provider = new firebase.auth.GoogleAuthProvider();
    

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

    getUserPosts(user){
        return db.collection('home-posts').where('author.id', '==', user.id).orderBy('date', 'desc')
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

    userSignWithGoogle(){
        return firebase.auth().signInWithPopup(this.google_provider)

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

    updateUserPostsInFirestore(user, postId){
        return db.collection("users").doc(user.id).update({
            posts: firebase.firestore.FieldValue.arrayUnion(postId)
        })
    }
    

    updatePostsCollection(post){
        return db.collection('home-posts').doc(post.id).set(post)
    }

    removePost(id){
        return db.collection('home-posts').doc(id).delete()
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
