// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,onAuthStateChanged,createUserWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { set,ref,getDatabase,onValue,remove,update} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyA_fblqQkoP9sJyYPvAtdyfSvaSUGKxTAE",
 authDomain: "rent-a-car-738b4.firebaseapp.com",
 databaseURL: "https://rent-a-car-738b4-default-rtdb.firebaseio.com",
 projectId: "rent-a-car-738b4",
 storageBucket: "rent-a-car-738b4.appspot.com",
 messagingSenderId: "820105441487",
 appId: "1:820105441487:web:ce09d482bf4d186ca4c7ba"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getDatabase(app);
const auth=getAuth(app);
var logout=document.getElementById("logout");

logout.addEventListener("click",()=>{
    signOut(auth)
    .then(() => {
      console.log('User signed out successfully');
      window.location.href = 'main.html';
    })
});

