import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyBOybv5_kNcIUPPvRiy-gwOSYO9vNAy4EY",
    authDomain: "crwn-db-495cb.firebaseapp.com",
    databaseURL: "https://crwn-db-495cb.firebaseio.com",
    projectId: "crwn-db-495cb",
    storageBucket: "crwn-db-495cb.appspot.com",
    messagingSenderId: "1033398151868",
    appId: "1:1033398151868:web:d7954288df6ba945bb3eb9"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
        return
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // console.log("snapshot==> ",snapShot)

    if(!snapShot.exists){
        const { displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

            })
        }catch(error){
            console.log("user note created ",error.message)
        }
    }
    return userRef;
}


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;