// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
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

var logout=document.getElementById("logout");

logout.addEventListener("click",()=>{
    signOut(auth)
    .then(() => {
      console.log('User signed out successfully');
      window.location.href = 'main.html';
    })
});




const swipper=new Swiper(".swiper",{
    autoplay:{delay:3000},
    effect:"swip",
    loop:true,
    pagination:{
        el:".swiper-pagination"
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    scrollbar:{
        el:"swiper-scrollbar"
    }
});



window.sr=ScrollReveal({reset:true});
     sr.reveal(".head1",{
         duration:1000,
         origin:"left",
         distance:"15%"
     });
     sr.reveal(".searbox",{
         duration:1000,
         origin:"bottom",
         distance:"15%",
         delay:500
     });
     sr.reveal("#carimg",{
         duration:200,
         distance:"10%",
         origin:"right",
         delay:500
     });
     sr.reveal(".car1",{
         duration:1000,
         distance:"10%",
         origin:"bottom",
         delay:500
     });
     sr.reveal(".car2",{
         duration:1000,
         distance:"10%",
         origin:"bottom",
         delay:1000
     });
     sr.reveal(".car3",{
         duration:1000,
         distance:"10%",
         origin:"bottom",
         delay:1500
     });
     sr.reveal(".car4",{
         duration:1000,
         distance:"10%",
         origin:"bottom",
         delay:2000
     });
     sr.reveal("#find",{
         duration:1000,
         distance:"10%",
         origin:"bottom",
         delay:500
     });
     sr.reveal("#dis",{
         duration:1000,
         distance:"15%",
         origin:"bottom",
         delay:500
     });
     sr.reveal("#findl",{
         duration:1000,
         distance:"20%",
         origin:"bottom",
         delay:500
     });
     sr.reveal("#location",{
         duration:1000,
         distance:"15%",
         origin:"right",
         delay:500
     });
     sr.reveal("#carda1",{
         duration:1000,
         distance:"20%",
         origin:"bottom",
         delay:500
     });
     sr.reveal("#carda2",{
         duration:1000,
         distance:"20%",
         origin:"bottom",
         delay:800
     });
     sr.reveal("#carda3",{
         duration:1000,
         distance:"20%",
         origin:"bottom",
         delay:1100
     });
     sr.reveal("#precr",{
         duration:1000,
         distance:"10%",
         origin:"bottom",
         delay:100
     });
     sr.reveal("#gio",{
         duration:1000,
         distance:"5%",
         origin:"bottom",
         delay:200
     });
     sr.reveal("#phn",{
         duration:1000,
         distance:"10%",
         origin:"right",
         delay:200
     });

   


