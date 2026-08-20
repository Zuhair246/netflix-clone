import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVDU7-j0iMFMpKzkI6Wban3TyOoLUg0eY",
  authDomain: "netflix-clone-d0185.firebaseapp.com",
  projectId: "netflix-clone-d0185",
  storageBucket: "netflix-clone-d0185.firebasestorage.app",
  messagingSenderId: "10915475881",
  appId: "1:10915475881:web:03fdf32b361e357f1214b8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;