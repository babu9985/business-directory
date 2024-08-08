// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClnmKCiv_E2OPYj_80dgG0MSMVVvFo174",
  authDomain: "business-react-app-9cf06.firebaseapp.com",
  projectId: "business-react-app-9cf06",
  storageBucket: "business-react-app-9cf06.appspot.com",
  messagingSenderId: "494040160620",
  appId: "1:494040160620:web:f89e14f413d3d11deafb49",
  measurementId: "G-0CVKB2ZPK3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);