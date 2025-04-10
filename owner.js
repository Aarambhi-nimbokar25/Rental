
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,onAuthStateChanged,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
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
 var a=document.getElementById("oemail");
 var b=document.getElementById("opwd");
 var a1=document.getElementById("email2");
 var b1=document.getElementById("password2");
 var c=document.getElementById("oname");
 var d=document.getElementById("oaddress");
 var e=document.getElementById("omob");
 var f=document.getElementById("oage");
 var g=document.getElementById("ocarid");
 var h=document.getElementById("omodel");
 var i=document.getElementById("osignup");
 var j=document.getElementById("ologin");
var count=0;

 i.addEventListener("click",()=>{
    count++
    set(ref(db,'user/' +`${count}`),{
        A: a.value, B: b.value, C: c.value,D: d.value,E: e.value, F:f.value, G:g.value, H:h.value
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
    g.value="";
    h.value="";

    const u=user.user;
    console.log("new user added"+u);
  })
  });

  j.addEventListener("click",()=>{
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
    window.location.href="ownermain.html";
      });
