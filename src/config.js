// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYKTifY32AkBGJVt2xoHLs6DLi5V3x2hA",
  authDomain: "context-setup.firebaseapp.com",
  projectId: "context-setup",
  storageBucket: "context-setup.appspot.com",
  messagingSenderId: "933714321399",
  appId: "1:933714321399:web:818b6ba096b31f213018f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;