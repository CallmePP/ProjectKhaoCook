import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import RandomMenuScreen from "./screens/RandomMenuScreen";
import NotificationScreen from "./screens/NotificationScreen"; // ✅ เพิ่ม import

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="RandomMenuScreen" component={RandomMenuScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
