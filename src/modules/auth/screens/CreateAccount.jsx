import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image, Input, Button, Icon } from "@rneui/base";
import { isEmpty, isEqual } from "lodash";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../kernel/utils/FirebaseConnection";

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const handleCreateAccount = async () => {
    let errors = {};

    if (isEmpty(email)) {
      errors.email = "El correo electrónico es requerido";
    }
    if (isEmpty(password)) {
      errors.password = "La contraseña es requerida";
    }
    if (isEmpty(passwordRepeat)) {
      errors.passwordRepeat = "La confirmación de contraseña es requerida";
    }
    if (!isEmpty(password) && !isEmpty(passwordRepeat) && !isEqual(password, passwordRepeat)) {
      errors.password = "Las contraseñas no coinciden";
      errors.passwordRepeat = "Las contraseñas no coinciden";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      setError({ email: "", password: "", passwordRepeat: "" });

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("Cuenta creada con éxito");
      } catch (error) {
        console.error("Error al crear cuenta:", error.message);
        setError({ email: "", password: "Hubo un problema al registrar la cuenta", passwordRepeat: "" });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 50, height: 50 }}
      />
      <View style={{ margin: 16 }}>
        <Input
          placeholder="Correo electrónico"
          label="Correo electrónico"
          keyboardType="email-address"
          inputContainerStyle={{ width: "100%" }}
          onChangeText={setEmail}
          errorMessage={error.email}
        />
        <Input
          placeholder="Contraseña"
          label="Contraseña"
          secureTextEntry={showPassword}
          inputContainerStyle={{ width: "100%" }}
          rightIcon={
            <Icon
              name={showPassword ? "eye" : "eye-off"}
              type="material-community"
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          onChangeText={setPassword}
          errorMessage={error.password}
        />

        <Input
          placeholder="Repetir contraseña"
          label="Repetir contraseña"
          secureTextEntry={showPasswordRepeat}
          inputContainerStyle={{ width: "100%" }}
          rightIcon={
            <Icon
              name={showPasswordRepeat ? "eye" : "eye-off"}
              type="material-community"
              onPress={() => setShowPasswordRepeat(!showPasswordRepeat)}
            />
          }
          onChangeText={setPasswordRepeat}
          errorMessage={error.passwordRepeat}
        />
        <Button title="Crear cuenta" onPress={handleCreateAccount} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
