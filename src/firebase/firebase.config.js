// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE6WW7DUla-gVJBOaVudYUpNoie_HyHaE",
  authDomain: "ebook-using-mern.firebaseapp.com",
  projectId: "ebook-using-mern",
  storageBucket: "ebook-using-mern.appspot.com",
  messagingSenderId: "849830315114",
  appId: "1:849830315114:web:b109a3c20aa8e9ce217613",
  measurementId: "G-N39E662Y9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;