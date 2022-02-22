import React from "react";
import { Text, TextInput, View } from "../../Themed";
import { Pressable, StyleSheet } from "react-native";

const Login = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState("Username");
  const [password, onChangePassword] = React.useState("Password");
  const navigateToPage = () => {
    navigation.navigate("Tasks", {
      screen: "TabOne",
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TextInput
        style={styles.inputText}
        onChangeText={onChangeUsername}
        value={username}
      />
      <TextInput
        style={styles.inputText}
        onChangeText={onChangePassword}
        value={password}
      />
      <Pressable style={styles.button} onPress={() => navigateToPage()}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  inputText: {
    width: 130,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    borderRadius: 50,
    marginTop: 10,
    padding: 10,
    backgroundColor: "dodgerblue",
  },
  text: {
    color: "white",
  },
});
