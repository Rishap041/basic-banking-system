import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
apiKey: "AIzaSyCabILvrAbN5qS5hYKRuaUrEYnZUm9hPx8",
authDomain: "basic-banking-ac506.firebaseapp.com",
projectId: "basic-banking-ac506",
storageBucket: "basic-banking-ac506.appspot.com",
messagingSenderId: "377449151089",
appId: "1:377449151089:web:a5025e861ac684aaa179d0"
});

const db = firebaseApp.firestore();

export default db;



