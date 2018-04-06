import * as firebase from "firebase";
var Rebase = require("re-base"); //rebase sync db

const prodConfig = {
  apiKey: "AIzaSyDHd7EsO1u7RyYCnCZKCaxi_OAqtbpUjJM",
  authDomain: "aim-react-3e33e.firebaseapp.com",
  databaseURL: "https://aim-react-3e33e.firebaseio.com",
  projectId: "aim-react-3e33e",
  storageBucket: "aim-react-3e33e.appspot.com",
  messagingSenderId: "870178621133"
};

const devConfig = {
  apiKey: "AIzaSyDHd7EsO1u7RyYCnCZKCaxi_OAqtbpUjJM",
  authDomain: "aim-react-3e33e.firebaseapp.com",
  databaseURL: "https://aim-react-3e33e.firebaseio.com",
  projectId: "aim-react-3e33e",
  storageBucket: "aim-react-3e33e.appspot.com",
  messagingSenderId: "870178621133"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
var base = Rebase.createClass(db); // rebase sync db

export { db, auth, base };
