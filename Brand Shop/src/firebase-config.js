import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbZ82gdWQTy8AOHRXrtEsKxJJcXdoTXRs",
    authDomain: "gyumribrand.firebaseapp.com",
    projectId: "gyumribrand",
    storageBucket: "gyumribrand.appspot.com",
    messagingSenderId: "1061727133624",
    appId: "1:1061727133624:web:035c70e747060f2128794d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);