import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDsoJ9vo_c2M-pctwg7j6ntxZQhvoV0sbY",
  authDomain: "khaocook-e6cb9.firebaseapp.com",
  projectId: "khaocook-e6cb9",
  storageBucket: "khaocook-e6cb9.firebasestorage.app",
  messagingSenderId: "975539540203",
  appId: "1:975539540203:web:7f1e26a99c3383c0326eae",
  measurementId: "G-YMXTVSWXY5"
};

// Check if Firebase app is already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };