import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmvVz6gHozDVMTJtSbEfxrE6hyCzvLAQ4",
  authDomain: "flower-auth-bad16.firebaseapp.com",
  projectId: "flower-auth-bad16",
  storageBucket: "flower-auth-bad16.appspot.com",
  messagingSenderId: "840390463238",
  appId: "1:840390463238:web:11dc73e946e22b99921887",
  measurementId: "G-G99FDRWQRG",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { signInWithGoogle };
