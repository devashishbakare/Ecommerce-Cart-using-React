import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as firebase from "firebase/app";
import "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa-2BeEmFRLvWce1S982T1MyADRQG6pb4",
  authDomain: "e-commerce-cart-24152.firebaseapp.com",
  projectId: "e-commerce-cart-24152",
  storageBucket: "e-commerce-cart-24152.appspot.com",
  messagingSenderId: "386523436110",
  appId: "1:386523436110:web:185a69f15b7a6d93e6df1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


