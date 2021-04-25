import firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVfTUM6RDxazus8rr5NBRWqrzxVwqSXKI",
    authDomain: "crawn01-db.firebaseapp.com",
    projectId: "crawn01-db",
    storageBucket: "crawn01-db.appspot.com",
    messagingSenderId: "802166943647",
    appId: "1:802166943647:web:0929aa8eef69fbaffd17aa"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;