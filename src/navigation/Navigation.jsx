import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Contenedor de navegación
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Creador de navegación con pestañas inferiores
import Login from "../modules/auth/screens/Login"; // Pantalla de inicio de sesión
import CreateAccount from "../modules/auth/screens/CreateAccount"; // Pantalla de creación de cuenta
import { Icon } from "@rneui/base"; // Componente de iconos de React Native Elements
import LoginStack from "./stack/LoginStack"; // Stack de navegación para Login

// Creación del Tab Navigator
const Tab = createBottomTabNavigator();

/**
 * Componente principal de navegación que gestiona la estructura de pestañas en la aplicación.
 */
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          /**
           * Configuración del icono de la pestaña según la ruta actual.
           */
          tabBarIcon: ({ focused, color, size }) => {
            const { iconName, iconType } = getIconName(route.name, focused);
            return (
              <Icon name={iconName} type={iconType} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: "tomato", // Color cuando la pestaña está activa
          tabBarInactiveTintColor: "gray", // Color cuando la pestaña está inactiva
          headerShown: false, // Oculta la cabecera de las pantallas
        })}
      >
        {/* Pantalla de inicio de sesión */}
        <Tab.Screen
          name="Login"
          component={LoginStack}
          options={{ title: "Iniciar sesión" }}
        />

        {/* Pantalla de creación de cuenta */}
        <Tab.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ title: "Crear cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/**
 * Función que devuelve el nombre y tipo del icono basado en la ruta y si está enfocada.
 * @param {string} routeName - Nombre de la ruta
 * @param {boolean} focused - Indica si la pestaña está seleccionada
 * @returns {Object} - Contiene iconName e iconType
 */
const getIconName = (routeName, focused) => {
  let iconName = "";
  let iconType = "material-community"; // Tipo de icono por defecto

  switch (routeName) {
    case "Login":
      iconName = focused ? "account" : "account-outline"; // Ícono de usuario
      break;
    case "CreateAccount":
      iconName = focused ? "account-plus" : "account-plus-outline"; // Ícono de creación de cuenta
      break;
  }
  return { iconName, iconType };
};
