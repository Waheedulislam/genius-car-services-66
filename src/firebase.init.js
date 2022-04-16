// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCj4EClhH9VSvIoUwBrfGogtegISsddB4A",
    authDomain: "genius-car-services-289eb.firebaseapp.com",
    projectId: "genius-car-services-289eb",
    storageBucket: "genius-car-services-289eb.appspot.com",
    messagingSenderId: "302943005999",
    appId: "1:302943005999:web:c6444db2537d0a9c2185da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;