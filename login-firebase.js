import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyB4NOhojyb0U5WxSKgWExbzlSoby0knQY4",
    authDomain: "ngonngon-f0744.firebaseapp.com",
    databaseURL: "https://ngonngon-f0744-default-rtdb.firebaseio.com",
    projectId: "ngonngon-f0744",
    storageBucket: "ngonngon-f0744.appspot.com",
    messagingSenderId: "852169444752",
    appId: "1:852169444752:web:c6c0c4809ce6e6ba6cf715"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);