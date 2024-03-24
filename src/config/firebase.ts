// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1bRo5BHSLYWRrAktjTZoLU3c2KbK1yHg",
  authDomain: "webdevelopmenttask.firebaseapp.com",
  projectId: "webdevelopmenttask",
  storageBucket: "webdevelopmenttask.appspot.com",
  messagingSenderId: "1018279499409",
  appId: "1:1018279499409:web:c9eac99bf0158cfd8a5130",
  measurementId: "G-72KEH4HW2K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);