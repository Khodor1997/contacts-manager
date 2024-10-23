import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyArDoRbzFcQQ7ViHZRcyX_zf02tpbxscAs",
    authDomain: "contacts-manager-444d6.firebaseapp.com",
    projectId: "contacts-manager-444d6",
    storageBucket: "contacts-manager-444d6.appspot.com",
    messagingSenderId: "602586314204",
    appId: "1:602586314204:web:d93ef62a052f023b8d4b19"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)