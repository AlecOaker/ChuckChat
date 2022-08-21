import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import AppRouter from "./components/AppRouter";

const firebaseConfig = {
    apiKey: "AIzaSyDnUdj6q8nKX94FvkT194ffm91nNpTxuWM",
    authDomain: "chuckchat-a3a99.firebaseapp.com",
    projectId: "chuckchat-a3a99",
    storageBucket: "chuckchat-a3a99.appspot.com",
    messagingSenderId: "311115267980",
    appId: "1:311115267980:web:ef243fef118f3ca49c60a9",
    measurementId: "G-LRYX64NCTN",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppRouter auth={auth} login={login} firestore={firestore} />
        </BrowserRouter>
    </React.StrictMode>
);
