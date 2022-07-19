// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlo73GyyAwDiEUjafdAKdXTFH-IvCysO4",
    authDomain: "genius-car-service-f97ff.firebaseapp.com",
    projectId: "genius-car-service-f97ff",
    storageBucket: "genius-car-service-f97ff.appspot.com",
    messagingSenderId: "1006528475735",
    appId: "1:1006528475735:web:c1b0be0515233fba97e912",
    measurementId: "G-NGF0P32HZG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
