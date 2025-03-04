import React from "react";
import { StyleSheet, Text, ActivityIndicator } from "react-native";
import { Overlay } from "@rneui/base";
export default function Loading(props) {
  const { title, activityColor, sizeActivity, color, isVisible } = props;
  return (
    <Overlay
      isVisible={isVisible}
      overlayStyle={[styles.container, { borderColor: color }]}
    >
      <ActivityIndicator size={sizeActivity} color={activityColor} />
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{title}</Text>
    </Overlay>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
