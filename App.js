import React, { useState, useEffect } from "react";
import Navigation from "./src/navigation/Navigation";
import 'react-native-gesture-handler';
import { app, auth, db, storage } from "./src/kernel/utils/FirebaseConnection";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "./src/kernel/components/Loading";
import NavigationLogger from "./src/navigation/NavigationLogger";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuario logueado", user);
        setIsLogged(true);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Loading
        isVisible={true}
        title={"Espere un momento"}
        sizeActivity={64}
        color="#00a680"
        activityColor="#00a680"
      />
    );
  } else {
    return isLogged ? <NavigationLogger /> : <Navigation />;
  }
};