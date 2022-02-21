import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import Login from "../components/screens/login";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Login navigation={navigation} />
    </View>
  );
}

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
