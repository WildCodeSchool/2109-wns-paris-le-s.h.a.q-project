import React from "react";
import { Text, View } from "../../Themed";
import { StyleSheet } from "react-native";

const Login = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState();
  const [password, onChangePassword] = React.useState();
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
    width: 230,
    height: 50,
    margin: 12,
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
