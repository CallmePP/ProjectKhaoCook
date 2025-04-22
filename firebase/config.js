
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // ใช้สำหรับการเชื่อมต่อกับ Firebase Authentication

// ข้อมูลการตั้งค่าจาก Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyDsoJ9vo_c2M-pctwg7j6ntxZQhvoV0sbY",
    authDomain: "khaocook-e6cb9.firebaseapp.com",
    projectId: "khaocook-e6cb9",
    storageBucket: "khaocook-e6cb9.firebasestorage.app",
    messagingSenderId: "975539540203",
    appId: "1:975539540203:web:7f1e26a99c3383c0326eae",
    measurementId: "G-YMXTVSWXY5"
  };

// กำหนดค่า Firebase
const app = initializeApp(firebaseConfig);

export  const auth = getAuth(app); // ส่งออก Firebase Authentication
