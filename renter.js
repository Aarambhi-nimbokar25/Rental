// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,onAuthStateChanged,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { set,ref,getDatabase,onValue,remove,update} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ZTmmQnWgBTjxINALKgAeg0VlDxDVWwk",
  authDomain: "rentacar-renter.firebaseapp.com",
  databaseURL: "https://rentacar-renter-default-rtdb.firebaseio.com",
  projectId: "rentacar-renter",
  storageBucket: "rentacar-renter.appspot.com",
  messagingSenderId: "138892395919",
  appId: "1:138892395919:web:017b8509cccdbba67777fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getDatabase(app);
const auth=getAuth(app);
 var a=document.getElementById("remail");
 var b=document.getElementById("rpwd");
 var c=document.getElementById("rname");
 var d=document.getElementById("raddress");
 var e=document.getElementById("rmob");
 var f=document.getElementById("rage");
 var i=document.getElementById("rsignup");
 var rlbtn=document.getElementById("rlbtn");
 var a1=document.getElementById("email1");
 var b1=document.getElementById("password1");
var count=0;

 i.addEventListener("click",()=>{
    count++
    set(ref(db,'user/' +`${count}`),{
        A: a.value, B: b.value, C: c.value,D: d.value,E: e.value, F:f.value
    }).then(()=>{
      console.log("user added successfully");
    })
    createUserWithEmailAndPassword(auth,a.value,b.value).then((user)=>{
    a.value="";
    b.value=""; 
    c.value="";
    d.value="";
    e.value="";
    f.value="";

    
      
      const u=user.user;
      console.log("new user added"+u);
    })
  });


  rlbtn.addEventListener("click",()=>{
    var email=a1.value;
    var password=b1.value;
    console.log(email);
    console.log(password);
  signInWithEmailAndPassword(auth,email,password).then((user)=>{
    if(user){
    console.log("login successfully");
    }
    else{
      console.log("invalid user");
    }
  
  });
  });

  onAuthStateChanged(auth,(user)=>{
    if(user)
    window.location.href="index.html";
      });

    