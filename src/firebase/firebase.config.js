// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAow9KBQXdm7ulx2CMLX-nwEVhJ3CKWmko",
  authDomain: "bistro-boos-auth.firebaseapp.com",
  projectId: "bistro-boos-auth",
  storageBucket: "bistro-boos-auth.appspot.com",
  messagingSenderId: "1018630391928",
  appId: "1:1018630391928:web:be08de140db38cf4cf458d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app