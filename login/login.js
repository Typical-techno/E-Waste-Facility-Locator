const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
});



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT2TWMzFjVvQgQdYDXEAJO_UoMYE5YBtw",
  authDomain: "e-waste-project-a6450.firebaseapp.com",
  databaseURL: "https://e-waste-project-a6450-default-rtdb.firebaseio.com/",
  projectId: "e-waste-project-a6450",
  storageBucket: "e-waste-project-a6450.appspot.com",
  messagingSenderId: "979062024052",
  appId: "1:979062024052:web:f86ca3886d6dd109346e21"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get ref to database services
  const db = getDatabase(app);

  document.getElementById("login2").addEventListener('click', function(e){
    e.preventDefault();
    set(ref(db, 'Login/' + document.getElementById("password").value),
  {

    email: document.getElementById("email").value,
    password : document.getElementById("password").value
    

  });
    alert("Logined Succesfully  !");
  });
