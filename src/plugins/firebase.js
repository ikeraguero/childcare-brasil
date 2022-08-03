// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1amzTjYvU7o9WT7xG0EpFRlIDgnBG1RA",
  authDomain: "projeto-apadrinhamento.firebaseapp.com",
  projectId: "projeto-apadrinhamento",
  storageBucket: "projeto-apadrinhamento.appspot.com",
  messagingSenderId: "187582761656",
  appId: "1:187582761656:web:7112741ed9d4d7b335c24d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


export { app, db} 

/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARYz0w27gI6JpVttBffsEOMw5ykVj7elU",
  authDomain: "animigos-66311.firebaseapp.com",
  projectId: "animigos-66311",
  storageBucket: "animigos-66311.appspot.com",
  messagingSenderId: "671577476319",
  appId: "1:671577476319:web:aa91fae3486083f4df2d6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


export { app, db} /** */