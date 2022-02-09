// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPAGn8ZQc6WhPShCIqi6jOQVthw03BtoE",
  authDomain: "ecommerce-shopkart.firebaseapp.com",
  projectId: "ecommerce-shopkart",
  storageBucket: "ecommerce-shopkart.appspot.com",
  messagingSenderId: "775329888361",
  appId: "1:775329888361:web:2220686476dfe13342caf8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
