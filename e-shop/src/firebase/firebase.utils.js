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

export default firebase;
