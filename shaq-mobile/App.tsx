import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { extendTheme, NativeBaseProvider } from "native-base";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import OTP from "./screens/OTP";
import ProductScreen from "./screens/ProductScreen";
import StarterIntro from "./screens/StarterIntro";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
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
            <Drawer.Screen name={"OTP"} component={OTP} />
            <Drawer.Screen name={"ProductScreen"} component={ProductScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}
