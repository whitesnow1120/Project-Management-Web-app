import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyBOCGl8SbxcBOjHFRHo-95eFUOWF9zfvVo',
  authDomain: 'tutoist-tut.firebaseapp.com',
  projectId: 'tutoist-tut',
  storageBucket: 'tutoist-tut.appspot.com',
  messagingSenderId: '1099429000796',
  appId: '1:1099429000796:web:b088f1e90cd647b1301899',
});

export { firebaseConfig as firebase };
