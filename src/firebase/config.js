import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDE08DQaBI0IR17U0eLxAxy7tI9tVvCEis",
    authDomain: "netflix-1-ecd61.firebaseapp.com",
    projectId: "netflix-1-ecd61",
    storageBucket: "netflix-1-ecd61.appspot.com",
    messagingSenderId: "129992218207",
    appId: "1:129992218207:web:8884552091cb459d66edea",
    measurementId: "G-0GFNGNFC95"
};
firebase.initializeApp(firebaseConfig)

export { firebase }

