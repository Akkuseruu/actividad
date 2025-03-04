import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AvatarProfile from "../components/profile/AvatarProfile";
import { getAuth } from "firebase/auth";
import { Button } from "@rneui/base";
import MenuProfile from "../components/profile/MenuProfile";
export default function Profile() {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);
  const openModal = (title) =>{
    console.log("título -> ",title);
  }
  return (
    <View style={styles.container}>
      <AvatarProfile user={user} />
      <MenuProfile openModal={openModal} />
      <Button
        title={"Cerrar sesión"}
        onPress={() => {
          auth.signOut();
        }}
        containerStyle={{ margin: 16 }}
        buttonStyle={{
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "green",
        }}
        titleStyle={{ color: "green" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: "white",
  },
});
