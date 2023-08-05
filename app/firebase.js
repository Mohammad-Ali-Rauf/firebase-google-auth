import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAvj6pxXcFJa1d1hHdZGRRwRrPVzdqgrAY",
    authDomain: "nextjs-auth-project-8961b.firebaseapp.com",
    projectId: "nextjs-auth-project-8961b",
    storageBucket: "nextjs-auth-project-8961b.appspot.com",
    messagingSenderId: "723874647643",
    appId: "1:723874647643:web:ee6cdd7bd55c242e11b97e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);