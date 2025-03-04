import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfzoOTJTf1L7PwU4UIFiF7HTyuvylZaic",
  authDomain: "airbnb-e53ba.firebaseapp.com",
  projectId: "airbnb-e53ba",
  storageBucket: "airbnb-e53ba.firebasestorage.app",
  messagingSenderId: "673221357842",
  appId: "1:673221357842:web:48f4f275022d049edac3cb",
  measurementId: "G-XGJ4HBPZFV"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
