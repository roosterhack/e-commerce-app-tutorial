import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBS_Tt0fuClnY4cF5R8UHo3zfeUOiIpitk',
  authDomain: 'ed-db-dec7a.firebaseapp.com',
  databaseURL: 'https://ed-db-dec7a.firebaseio.com',
  projectId: 'ed-db-dec7a',
  storageBucket: 'ed-db-dec7a.appspot.com',
  messagingSenderId: '68465191169',
  appId: '1:68465191169:web:a319cb49c00508b0449300',
  measurementId: 'G-C7WF3G7DHX',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error(err.message);
    }
  }
  return userRef;
};

export default firebase;