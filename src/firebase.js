import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCfAt7KQwfVyHRPxVakHAcpDX9veDoAyO4",
  authDomain: "burgerqueenreact.firebaseapp.com",
  projectId: "burgerqueenreact",
  storageBucket: "burgerqueenreact.appspot.com",
  messagingSenderId: "782913498010",
  appId: "1:782913498010:web:51f2f2f7351e157542a823"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db, firebase };
