import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNWLiNZZhc8Max1larBXyNDMzRIKH8WpA",
    authDomain: "mathapp-c307d.firebaseapp.com",
    projectId: "mathapp-c307d",
    storageBucket: "mathapp-c307d.firebasestorage.app",
    messagingSenderId: "34223536257",
    appId: "1:34223536257:web:07d94a4cdfd871e4a9f580"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };