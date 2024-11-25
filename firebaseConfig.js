// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyAN62AKhFVx4cWQYTErhg_bsoUCbr55IG0",
    authDomain: "group-7-10f4a.firebaseapp.com",
    projectId: "group-7-10f4a",
    storageBucket: "group-7-10f4a.appspot.com",
    messagingSenderId: "998132910042",
    appId: "1:998132910042:web:64c658e68d2ca42141e2e3",
    measurementId: "G-KTVQ488NSQ"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };