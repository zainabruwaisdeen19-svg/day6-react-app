import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj_Jf55_xMpQQQrkAQcOMgaGP7ERTeAng",
  authDomain: "day6-react-app.firebaseapp.com",
  projectId: "day6-react-app",
  storageBucket: "day6-react-app.firebasestorage.app",
  messagingSenderId: "463482810776",
  appId: "1:463482810776:web:ec96e5bed7d21664877bed"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
export default app;