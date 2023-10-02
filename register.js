// Register Form

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAT2TWMzFjVvQgQdYDXEAJO_UoMYE5YBtw",
  authDomain: "e-waste-project-a6450.firebaseapp.com",
  databaseURL: "https://e-waste-project-a6450-default-rtdb.firebaseio.com",
  projectId: "e-waste-project-a6450",
  storageBucket: "e-waste-project-a6450.appspot.com",
  messagingSenderId: "979062024052",
  appId: "1:979062024052:web:f86ca3886d6dd109346e21"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

const token = localStorage.getItem('token')
if (token) {
  document.getElementById('login-btn').hidden = true
  document.getElementById('logout-btn').style.display = 'flex'
};

document.getElementById("submit").addEventListener('click', function (e) {
  e.preventDefault();
  if (token) {
  set(ref(db, 'Requests/' + document.getElementById("mobile-number").value),
    {

      Name: document.getElementById("name").value,
      Mobile: document.getElementById("mobile-number").value,
      Company: document.getElementById("device-company").value,
      Model: document.getElementById("device-model").value,

    });
  alert("Device Registered Succesfully  !");}
  else{
    alert("Please Login or Create New Account")
  }
});

document.getElementById('submit-sign').addEventListener('click', (e) => {

  const email = document.getElementById('email-sign').value;
  const password = document.getElementById('password-sign').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert('User Created')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
})

document.getElementById('submit-login').addEventListener('click', (e) => {

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      console.log(userCredential._tokenResponse.idToken);
      alert('Logged In');
      localStorage.setItem('token', userCredential._tokenResponse.idToken)
      location.reload()
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
})