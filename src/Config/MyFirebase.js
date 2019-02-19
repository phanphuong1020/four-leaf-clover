import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDRUeMWGf8dCMvhBPlwuMpV2uOHREkomaQ",
  authDomain: "zeta-period-228806.firebaseapp.com",
  databaseURL: "https://zeta-period-228806.firebaseio.com",
  projectId: "zeta-period-228806",
  storageBucket: "zeta-period-228806.appspot.com",
  messagingSenderId: "195758269668"
};

firebase.initializeApp(config);

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();
