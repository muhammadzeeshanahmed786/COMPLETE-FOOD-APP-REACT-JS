import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";
import { getStorage,ref ,uploadBytes ,getDownloadURL} from "firebase/storage";
;
const firebaseApp = initializeApp({
    apiKey: "AIzaSyB_PWIQMmV0I7w3BUaamrwgWS_JTjRxq6E",
    authDomain: "react-food-web-380d2.firebaseapp.com",
    projectId: "react-food-web-380d2",
    storageBucket: "react-food-web-380d2.appspot.com",
    messagingSenderId: "689955135562",
    appId: "1:689955135562:web:7b537ced52907a0f6046b3",
    measurementId: "G-V64DGYCZK7"
});

const auth = getAuth();
const db = getFirestore();
const storage = getStorage(firebaseApp);
const storageRef = ref(storage);
export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where,
    storage,
    storageRef,
    uploadBytes ,
    ref,
    getDownloadURL
};