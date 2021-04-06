import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "signal-clone-6137b.firebaseapp.com",
  projectId: "signal-clone-6137b",
  storageBucket: "signal-clone-6137b.appspot.com",
  messagingSenderId: "525277060469",
  appId: "1:525277060469:web:0c5855c16ac8ec875f073c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
