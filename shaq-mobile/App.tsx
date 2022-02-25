import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { extendTheme, NativeBaseProvider } from "native-base";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import CreateTaskScreen from "./screens/CreateTaskScreen";
import StarterIntro from "./screens/StarterIntro";
import TasksScreen from "./screens/TasksScreen";

const LinearGradient = require("expo-linear-gradient").LinearGradient;

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name={"Home"} component={StarterIntro} />
            <Drawer.Screen name={"SignUp"} component={SignUp} />
            <Drawer.Screen name={"SignIn"} component={SignIn} />
            <Drawer.Screen name={"TasksScreen"} component={TasksScreen} />
            <Drawer.Screen
              name={"CreateTaskScreen"}
              component={CreateTaskScreen}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}
