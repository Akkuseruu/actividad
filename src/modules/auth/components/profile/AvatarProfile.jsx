import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "@rneui/base";
export default function AvatarProfile(props) {
    const { user } = props;
  return (
    <View style={styles.container}>
      <Avatar 
        size={'large'}
        rounded
        source={user.photoURL ? 
            { uri: user.photoURL } : 
            {uri: 'https://www.gravatar.com/avatar/'}}
      />
      <View style={{flexDirection: 'column', marginLeft: 8, justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>
                {user.displayName ? user.displayName : 'Anónimo'}
            </Text>
            <Text>
                {user.email}
            </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 16
  },
});
