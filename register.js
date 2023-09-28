// Register Form

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


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


  const db = getDatabase(app);


  document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();
    set(ref(db, 'Requests/' + document.getElementById("name").value),
  {

    Name: document.getElementById("name").value,
    Mobile: document.getElementById("mobile-number").value,
    Company: document.getElementById("device-company").value,
    Model: document.getElementById("device-model").value,

  });
  alert("Device Registered Succesfully  !");
  });

  document.getElementById("submit-sign").addEventListener('click', function(e){
    e.preventDefault();
    set(ref(db, 'Accounts/' + document.getElementById("name-sign").value),
  {

    name: document.getElementById("name-sign").value,
    email: document.getElementById("email-sign").value,
    password: document.getElementById("password-sign").value   

  });
  alert("Sign Up  Succesfully  !");
  });
