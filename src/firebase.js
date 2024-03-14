
import firebase from "firebase/app";
import "firebase/firestore";

// Firebase configuration for app 1
const firebaseConfig1 = {
    apiKey: "AIzaSyBRsx8YeEzPCa9qyZTBGTsPuO9r3ZzDs40",
    authDomain: "dementicare-6aa31.firebaseapp.com",
    projectId: "dementicare-6aa31",
    storageBucket: "dementicare-6aa31.appspot.com",
    messagingSenderId: "267619095289",
    appId: "1:267619095289:web:5a717667bad6c587758828",
    measurementId: "G-ZJYLJPZQMZ"
  };
// firebase.initializeApp(firebaseConfig1);
// export const db = firebase.firestore();
// Initialize Firebase for app 1
const firebaseApp1 = firebase.initializeApp(firebaseConfig1, "app1");
export const db = firebaseApp1.firestore();

// Firebase configuration for app 2
const firebaseConfig2 = {
    apiKey: "AIzaSyAOvVJUzIsNm9AEf0bL4tfS7lwBC0G6pog",
    authDomain: "job-listing-9ec1b.firebaseapp.com",
    projectId: "job-listing-9ec1b",
    storageBucket: "job-listing-9ec1b.appspot.com",
    messagingSenderId: "532362349089",
    appId: "1:532362349089:web:1d1966e4d1dba6979c3160",
    measurementId: "G-NYLJST6ZN0"
};

// Initialize Firebase for app 2
const firebase1 = firebase.initializeApp(firebaseConfig2, "app2");
const firestore1 = firebase1.firestore();
export{firebase1,firestore1,firebase};