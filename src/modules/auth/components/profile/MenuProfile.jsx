import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { ListItem, Icon } from "@rneui/themed";

const list1 = [
  { title: "Modificar nombre", icon: "account-outline" },
  { title: "Modificar correo", icon: "email-outline" },
  { title: "Modificar contraseña", icon: "lock-outline" },
];

export default function MenuProfile (props)  {
  const {openModal} = props;
  const renderItem = ({ item }) => (
    <ListItem bottomDivider onPress={() => openModal(item.title)}>
      <Icon name={item.icon} type="material-community" />
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={list1}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});