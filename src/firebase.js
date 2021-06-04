import firebase from 'firebase';

// const {
//     REACT_APP_FIREBASE_API_KEY,
//     REACT_APP_FIREBASE_AUTH_DOMAIN,
//     REACT_APP_FIREBASE_PROJECT_ID,
//     REACT_APP_FIREBASE_STORAGE_BUCKET,
//     REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     REACT_APP_FIREBASE_APP_ID,
// } = process.env;

var firebaseConfig = {
    apiKey: "AIzaSyAuvnqbdO7oWIooTAxlbZtXRn9bpVQ9KhI",
    authDomain: "chatapp-9aaa1.firebaseapp.com",
    projectId: "chatapp-9aaa1",
    storageBucket: "chatapp-9aaa1.appspot.com",
    messagingSenderId: "149813897347",
    appId: "1:149813897347:web:44ed878e19bb20567493b6"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
    messagesRef.push({name, text});
};