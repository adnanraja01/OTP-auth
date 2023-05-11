// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDkMlZqMLzkVveOO1lgCaZpdvq4rxa5HvQ",
//   authDomain: "task-b787a.firebaseapp.com",
//   projectId: "task-b787a",
//   storageBucket: "task-b787a.appspot.com",
//   messagingSenderId: "254587242145",
//   appId: "1:254587242145:web:a1d01d8925cc0cc00a12e0",
// };
const firebaseConfig = {
  apiKey: "AIzaSyAPTlKiWST7dV9eT9yXwljO0pNIF3mnrnU",
  authDomain: "phone-auth-task-5efcc.firebaseapp.com",
  projectId: "phone-auth-task-5efcc",
  storageBucket: "phone-auth-task-5efcc.appspot.com",
  messagingSenderId: "27263704432",
  appId: "1:27263704432:web:cc118146e3dd073e4383b5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
